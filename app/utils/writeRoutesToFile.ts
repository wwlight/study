import type { NuxtPage } from 'nuxt/schema'
import fs from 'node:fs'
import path from 'node:path'
import upperCase from 'lodash-es/upperCase'

function groupRoutesWithCustomTitles(routes: NuxtPage[]) {
  const grouped: Record<string, { name: string, title: string, children: NuxtPage[] }> = {}

  routes.forEach((route: NuxtPage) => {
    if (route.path === '/')
      return
    const segments = route.path.split('/').filter(segment => segment)
    if (segments.length <= 1)
      return
    const groupName = segments[0]!
    const groupTitle = `${upperCase(groupName)} 示例`
    if (!grouped[groupName]) {
      grouped[groupName] = {
        name: groupName,
        title: groupTitle,
        children: [],
      }
    }
    grouped[groupName].children.push(route)
  })
  return Object.values(grouped)
}

export default function (routes: NuxtPage[]) {
  const groupedRoutes = groupRoutesWithCustomTitles(routes)
  const publicDir = path.resolve(process.cwd(), 'public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  const outputPath = path.resolve(publicDir, 'routes.json')
  fs.writeFileSync(outputPath, JSON.stringify(groupedRoutes, null, 2))
}
