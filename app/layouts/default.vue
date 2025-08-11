<script setup lang="ts">
const colorMode = useColorMode()
const router = useRouter()
const route = useRoute()

const routes = router.getRoutes()
const activeName = ref(route.name || 'index')

function toggleDark() {
  if (colorMode.value === 'dark') {
    colorMode.value = 'light'
  }
  else if (colorMode.value === 'light') {
    colorMode.value = 'dark'
  }
  else {
    colorMode.value = 'light'
  }
}

function handleMenuClick(menu: any) {
  activeName.value = menu.name
  navigateTo(menu.path)
}
</script>

<template>
  <div class="absolute size-full flex">
    <aside w-210>
      <ul>
        <li
          v-for="menu in routes" :key="menu.path"
          class="cursor-pointer px-12 py-6 hover:(bg-#eee text-black dark:bg-#333)"
          :class="[activeName === menu.name && 'bg-#eee text-black']" @click="handleMenuClick(menu)"
        >
          {{ menu?.meta?.title || menu.name }}
        </li>
      </ul>
    </aside>
    <div class="flex flex-1 flex-col">
      <div i-ri-sun-line dark:i-ri-moon-line cursor-pointer dark:text-white @click="toggleDark" />
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}

.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
