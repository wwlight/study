<script setup lang="ts">
const colorMode = useColorMode()

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
</script>

<template>
  <div @click="toggleDark">
    <div i-ri-sun-line dark:i-ri-moon-line cursor-pointer dark:text-white />
    <slot />
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
