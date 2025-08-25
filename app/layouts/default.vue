<script setup lang="ts">
import LayoutMenu from './_components/layout-menu.vue'
</script>

<template>
  <main class="size-full absolute">
    <layout-menu />
    <div flex="~ col" class="ml-[--wl-menu-width] h-full of-x-hidden overflow-y-scroll">
      <slot />
    </div>
  </main>
</template>
