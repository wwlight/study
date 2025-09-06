<script setup lang="ts">
defineOptions({
  name: 'SvgPage',
})
definePageMeta({
  title: 'SVG 示例',
  order: 998,
})
</script>

<template>
  <svg width="200" height="200">
    <circle cx="100" cy="120" r="70" fill="#D1495B" />
    <rect x="82" y="35" width="36" height="20" fill="#F79257" />
    <circle
      cx="100"
      cy="25"
      r="12"
      fill="none"
      stroke="#F79257"
      stroke-width="2"
    />
  </svg>
</template>
