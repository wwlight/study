<script setup lang="ts">
import type { NuxtPage } from 'nuxt/schema'
import groupedRoutes from '~~/public/routes.json'

defineOptions({
  name: 'LayoutMenu',
})

const isSubVisible = ref(false)
const activeMenu = ref({ name: '', title: '' })
const subMenu = ref<NuxtPage[]>([])
const subActiveName = ref('')

function handleMenuClick(menu: any) {
  const { name, title, children } = menu
  activeMenu.value = { name, title }

  isSubVisible.value = true
  subMenu.value = children || []
  subActiveName.value = children[0]?.name || ''
  navigateTo(children[0]?.path)
}

function handleMenuBack() {
  isSubVisible.value = false
  navigateTo(`/${activeMenu.value.name}`)
  subActiveName.value = ''
}

function handleSubMenuClick(menu: any) {
  subActiveName.value = menu.name
  navigateTo(menu.path)
}
</script>

<template>
  <aside flex="~ col" class="b-e b-e-[--color-wl-border] min-w-fit w-[--wl-menu-width] start-0 bottom-0 top-0 fixed">
    <div class="flex-1 relative of-hidden">
      <Transition
        enter-active-class="animate-slide-in-left animate-duration-200"
        leave-active-class="animate-slide-out-left animate-duration-200"
      >
        <ul v-if="!isSubVisible" class="size-full absolute">
          <li
            v-for="menu in groupedRoutes" :key="menu.name" class="menu-item" @click="handleMenuClick(menu)"
          >
            <span>{{ menu.title }}</span>
            <i class="i-lucide-chevron-right" />
          </li>
        </ul>
      </Transition>
      <Transition
        enter-active-class="animate-slide-in-right animate-duration-200"
        leave-active-class="animate-slide-out-right animate-duration-200"
      >
        <ul v-if="isSubVisible" class="size-full absolute">
          <li class="menu-item b-(b-1 b-[--color-wl-border] b-solid)" @click="handleMenuBack">
            <i class="i-lucide-chevron-left" />
            <span class="flex-1">{{ activeMenu!.title }}</span>
          </li>
          <li
            v-for="menu in subMenu" :key="menu.name" class="menu-item m-3 !pl-30"
            :class="[subActiveName === menu.name && 'active']" @click="handleSubMenuClick(menu)"
          >
            <span>{{ menu.meta?.title }}</span>
          </li>
        </ul>
      </Transition>
    </div>
    <div class="p-10 b-bs b-bs-[--color-wl-border] flex">
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
  @apply: px-12 py-10 rd-3 cursor-pointer transition-all transition-color-300 dark:text-white flex justify-between items-center gap-5;

  &.active {
    @apply: bg-blue-500 text-white transition-all duration-300 ease-in-out;
  }
}
</style>
