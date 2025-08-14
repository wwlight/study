<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const routes = router.getRoutes().toSorted((a, b) => {
  return (a.meta?.order as number || 0) - (b.meta?.order as number || 0)
})

const activeName = ref(route.name || 'index')

const isDark = useDark({
  selector: 'body',
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)

function handleMenuClick(menu: any) {
  activeName.value = menu.name
  navigateTo(menu.path)
}
</script>

<template>
  <div class="flex size-full absolute">
    <aside w-210>
      <ul>
        <li
          v-for="menu in routes" :key="menu.path"
          class="px-12 py-10 rd-3 cursor-pointer transition-all dark:text-white hover:(text-black bg-#eee)"
          :class="[activeName === menu.name && 'bg-#eee !text-black']" @click="handleMenuClick(menu)"
        >
          {{ menu?.meta?.title || menu.name }}
        </li>
      </ul>
    </aside>
    <div flex="~ 1 col">
      <div class="p-10">
        <div class="i-ri-sun-line dark:i-ri-moon-line cursor-pointer float-end dark:text-white" @click="toggleDark()" />
      </div>
      <main flex-1 overflow-y-scroll>
        <slot />
      </main>
    </div>
  </div>
</template>

<style>
body.dark {
  color-scheme: dark;
  background-color: #060c21;
}
</style>
