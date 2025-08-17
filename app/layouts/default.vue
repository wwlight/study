<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const isDark = useDark()

const routes = router.getRoutes().toSorted((a, b) => {
  return (a.meta?.order as number || 0) - (b.meta?.order as number || 0)
})
const activeName = ref(route.name || 'index')
const style = ref({})

onMounted(() => {
  init()
})
/**
 * https://github.com/unocss/unocss/blob/main/packages-integrations/inspector/client/components/NarBar.vue
 */
// @ts-expect-error: Transition API
const isAppearanceTransition = document.startViewTransition
  && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

function toggleDark(event?: MouseEvent) {
  if (!isAppearanceTransition || !event) {
    isDark.value = !isDark.value
    return
  }
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: isDark.value
          ? [...clipPath].reverse()
          : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-in',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}

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
  const index = routes.findIndex(r => r.name === activeName.value)
  const initItemIndex = index >= 0 ? index : 0
  liNodeList && indicator(liNodeList[initItemIndex] as HTMLElement)
}
</script>

<template>
  <div class="flex size-full absolute">
    <aside class="p-10 min-w-300 w-300 overflow-y-scroll">
      <ul class="relative space-y-10">
        <div class="rd-2 bg-blue-500 transition-all duration-300 absolute z--1" :style />
        <li
          v-for="menu in routes" :key="menu.path"
          class="px-12 py-10 rd-3 cursor-pointer transition-all transition-color-300 dark:text-white"
          :class="[activeName === menu.name && !isDark && 'text-white']" @click="handleMenuClick($event, menu)"
        >
          {{ menu?.meta?.title || menu.name }}
        </li>
      </ul>
    </aside>
    <div flex="~ 1 col">
      <div class="p-10">
        <div class="i-ri-sun-line dark:i-ri-moon-line cursor-pointer float-end dark:text-white" @click="toggleDark" />
      </div>
      <main flex-1 overflow-y-scroll>
        <slot />
      </main>
    </div>
  </div>
</template>

<style>
html {
  scrollbar-gutter: stable;
}

html.dark {
  color-scheme: dark;
  background: #121212;
  color: white;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root) {
  z-index: 1;
}

::view-transition-new(root) {
  z-index: 2147483646;
}

.dark::view-transition-old(root) {
  z-index: 2147483646;
}

.dark::view-transition-new(root) {
  z-index: 1;
}
</style>
