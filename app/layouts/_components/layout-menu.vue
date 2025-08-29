<script setup lang="ts">
import type { NuxtPage } from 'nuxt/schema'
import type { GroupRouteItem } from '~/types'
import menuData from '~~/public/menu-data.json'

defineOptions({
  name: 'LayoutMenu',
})

const route = useRoute()
const activeMenu = ref({ name: '', title: '' })
const subMenu = ref<NuxtPage[]>([])
const isSubVisible = ref(false)
const isSubActiveName = ref('')

onMounted(() => {
  initActiveMenu()
})

function initActiveMenu() {
  const segments = route.path.split('/').filter(Boolean)
  if (!segments.length)
    return

  const segment = segments[0]!
  if (segments.length > 1) {
    const { name, title, children } = menuData.find((item: GroupRouteItem) => item.name === segment)!
    subMenu.value = children
    isSubVisible.value = true
    isSubActiveName.value = route.name as string
    Object.assign(activeMenu.value, { name, title })
  }
  else {
    isSubVisible.value = false
    isSubActiveName.value = ''
    Object.assign(activeMenu.value, {
      name: segment,
      title: route.meta?.title as string,
    })
  }
}

function handleMenuClick(menu: any) {
  const { name, title, children } = menu
  Object.assign(activeMenu.value, { name, title })

  if (!children.length) {
    navigateTo({ name, replace: true })
    return
  }
  const current = children[0]
  subMenu.value = children
  isSubVisible.value = true
  isSubActiveName.value = current.name as string
  navigateTo({ name: current?.name, replace: true })
}

function handleMenuBack() {
  isSubVisible.value = false
  isSubActiveName.value = ''
  const { name } = activeMenu.value
  navigateTo({ name, replace: true })
}

function handleSubMenuClick(menu: NuxtPage) {
  isSubActiveName.value = menu.name as string
  navigateTo({ name: menu.name, replace: true })
}
</script>

<template>
  <aside flex="~ col" class="b-e b-e-[--color-wl-border] min-w-fit w-[--wl-menu-width] start-0 bottom-0 top-0 fixed">
    <div class="flex-1 relative of-hidden">
      <Transition
        enter-active-class="animate-slide-in-left animate-duration-200"
        leave-active-class="animate-slide-out-left animate-duration-200"
      >
        <ul v-if="!isSubVisible" class="flex flex-col size-full">
          <li
            v-for="menu in menuData" :key="menu.name" class="menu-item"
            :class="[activeMenu.name === menu.name && 'active']" @click="handleMenuClick(menu)"
          >
            <span>{{ menu.title }}</span>
            <i v-if="!!menu.children.length" class="i-lucide-chevron-right" />
          </li>
        </ul>
      </Transition>
      <Transition
        enter-active-class="animate-slide-in-right animate-duration-200"
        leave-active-class="animate-slide-out-right animate-duration-200"
      >
        <ul v-if="isSubVisible" class="flex flex-col size-full">
          <li class="menu-item" @click="handleMenuBack">
            <i class="i-lucide-chevron-left" />
            <span class="flex-1">{{ activeMenu!.title }}</span>
          </li>
          <div class="bg-[--color-wl-border] h-1 w-full" />
          <li
            v-for="menu in subMenu" :key="menu.name" class="menu-item !pl-30"
            :class="[isSubActiveName === menu.name && 'active']" @click="handleSubMenuClick(menu)"
          >
            <span>{{ menu.meta?.title }}</span>
          </li>
        </ul>
      </Transition>
    </div>
    <div class="p-5 b-bs-(1 [--color-wl-border] solid) flex">
      <NuxtLink href="https://github.com/wwlight/study" target="_blank" class="flex-center size-34 cursor-pointer">
        <div class="i-ri-github-fill" />
      </NuxtLink>
      <div class="ml-a flex-center size-34 cursor-pointer" @click="useToggleDark">
        <div class="i-ri-sun-line dark:i-ri-moon-line" />
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.menu-item {
  @apply: px-12 py-5 my-3 mx-5 rd-3 cursor-pointer transition-all transition-300 dark:text-white flex justify-between items-center gap-5;

  &.active {
    @apply: bg-blue-500 text-white transition-all duration-300 ease-in-out;
  }
}
</style>
