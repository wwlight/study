import type { NuxtPage } from 'nuxt/schema'
import type { GroupRouteItem } from '~/types'
import fs from 'node:fs'
import path from 'node:path'

function generateGroupRoutes(routes: NuxtPage[]) {
  const groupRoutes: Record<string, GroupRouteItem> = {}

  routes
    .sort((a, b) => ((b?.meta?.order ?? 0) - (a?.meta?.order ?? 0)))
    .forEach((route: NuxtPage) => {
      if (route.path === '/')
        return
      const segments = route.path.split('/').filter(Boolean)
      if (segments.length === 0)
        return

      const groupName = segments[0]!
      const groupTitle = `${groupName} 示例`
      if (!groupRoutes[groupName]) {
        groupRoutes[groupName] = {
          name: groupName,
          title: route.meta?.title || groupTitle,
          children: [],
        }
      }
      else {
        groupRoutes[groupName]!.children.push(route)
      }
    })
  return Object.values(groupRoutes)
}

export default function (routes: NuxtPage[]) {
  const groupedRoutes = generateGroupRoutes(routes)
  const publicDir = path.resolve(process.cwd(), 'public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  const outputPath = path.resolve(publicDir, 'menu-data.json')
  fs.writeFileSync(outputPath, JSON.stringify(groupedRoutes, null, process.env.NODE_ENV === 'development' ? 2 : 0))
}
