<script setup lang="ts">
import LayoutMenu from './_components/layout-menu.vue'
</script>

<template>
  <div class="flex size-full absolute">
    <aside class="p-10 min-w-fit box-border overflow-y-scroll">
      <layout-menu />
    </aside>
    <div flex="~ 1 col">
      <div class="p-10">
        <div class="i-ri-sun-line dark:i-ri-moon-line cursor-pointer float-end dark:text-white" @click="useToggleDark" />
      </div>
      <main class="flex-1 of-x-hidden overflow-y-scroll">
        <slot />
      </main>
    </div>
  </div>
</template>
