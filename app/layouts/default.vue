<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const routes = router.getRoutes()
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
          class="px-12 py-6 cursor-pointer dark:text-white hover:(text-black bg-#eee)"
          :class="[activeName === menu.name && 'bg-#eee !text-black']" @click="handleMenuClick(menu)"
        >
          {{ menu?.meta?.title || menu.name }}
        </li>
      </ul>
    </aside>
    <div flex="~ 1 col">
      <div class="i-ri-sun-line dark:i-ri-moon-line cursor-pointer dark:text-white" @click="toggleDark()" />
      <main flex-1>
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
