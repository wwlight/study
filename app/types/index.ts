import type { NuxtPage } from 'nuxt/schema'

export interface GroupRouteItem {
  name: string
  title: string
  children: NuxtPage[]
}
