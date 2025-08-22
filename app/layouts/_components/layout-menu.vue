<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

defineOptions({
  name: 'LayoutMenu',
})

const route = useRoute()
const router = useRouter()
const isDark = useDark()

const activeName = ref(route.name || 'index')
const style = ref({})

onMounted(() => {
  init()
})

// function groupRoutesWithCustomTitles(routes: RouteRecordRaw[], titleMap: Record<string, string> = {}) {
//   const grouped: Record<string, { name: string, title: string, routes: RouteRecordRaw[] }> = {}

//   routes.forEach((route: RouteRecordRaw) => {
//     if (route.path === '/')
//       return

//     const segments = route.path.split('/').filter(segment => segment)

//     if (segments.length === 0)
//       return

//     const groupName = segments[0]!
//     console.log(groupName)

//     const groupTitle = titleMap[groupName!] || groupName.toUpperCase()

//     if (!grouped[groupName]) {
//       grouped[groupName] = {
//         name: groupName,
//         title: groupTitle,
//         routes: [],
//       }
//     }

//     grouped[groupName].routes.push(route)
//   })

//   return Object.values(grouped)
// }

// // 使用自定义标题映射
// const titleMap: Record<string, string> = {
//   css: 'CSS 示例',
//   js: 'JavaScript 示例',
//   api: 'API 接口',
// }
const routes = router.getRoutes().toSorted((a: RouteRecordRaw, b: RouteRecordRaw) => {
  return (a.meta?.order as number || 0) - (b.meta?.order as number || 0)
})
// const groupedRoutes = groupRoutesWithCustomTitles(routes, titleMap)
// console.log(groupedRoutes)

function handleMenuClick(e: MouseEvent, menu: any) {
  activeName.value = menu.name
  navigateTo(menu.path)
  indicator(e.target as HTMLElement)
}

function indicator(e: HTMLElement) {
  Object.assign(style.value, {
    top: `${e.offsetTop}px`,
    width: `${e.offsetWidth}px`,
    height: `${e.offsetHeight}px`,
  })
}

function init() {
  const liNodeList = document.querySelectorAll('aside ul li') as NodeListOf<HTMLElement>
  const index = routes.findIndex((r: RouteRecordRaw) => r.name === activeName.value)
  const initItemIndex = index >= 0 ? index : 0
  liNodeList && indicator(liNodeList[initItemIndex] as HTMLElement)
}
</script>

<template>
  <ul class="menu-root">
    <div class="menu-mask" :style />
    <li
      v-for="menu in routes" :key="menu.path" class="menu-item"
      :class="[activeName === menu.name && !isDark && 'text-white']" @click="handleMenuClick($event, menu)"
    >
      {{ menu?.meta?.title || menu.name }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
.menu-root {
  @apply: w-256 relative space-y-10;

  .menu-mask {
    @apply: rd-2 bg-blue-500 transition-all duration-300 absolute z--1 ease-in-out;
  }

  .menu-item {
    @apply: px-12 py-10 rd-3 cursor-pointer transition-all transition-color-300 dark:text-white;
  }
}
</style>
