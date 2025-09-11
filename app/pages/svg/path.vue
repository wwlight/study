<script setup lang="ts">
defineOptions({
  name: 'SvgPathPage',
})

definePageMeta({
  title: '路径',
  order: 2,
})
</script>

<template>
  <div style="--svg-theme-color: #D1495B" flex flex-wrap>
    <svg width="100" height="100" viewBox="0 0 100 100">
      <!-- 大写字母，表示采用绝对定位 -->
      <path d="M 10 10 H 90 V 90 H 10 L 10 10" />
      <!-- Points -->
      <circle cx="10" cy="10" r="2" fill="red" />
      <circle cx="90" cy="90" r="2" fill="red" />
      <circle cx="90" cy="10" r="2" fill="red" />
      <circle cx="10" cy="90" r="2" fill="red" />
    </svg>
    <svg width="100" height="100" viewBox="0 0 100 100">
      <!-- 小写字母，表示采用相对定位 -->
      <path d="m 10 10 h 80 v 80 h -80 v -80" />
      <!-- Points -->
      <circle cx="10" cy="10" r="2" fill="red" />
      <circle cx="90" cy="90" r="2" fill="red" />
      <circle cx="90" cy="10" r="2" fill="red" />
      <circle cx="10" cy="90" r="2" fill="red" />
    </svg>
    <svg>
      <path d="M 10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="red" />
    </svg>

    <svg>
      <path d="M 10 10 C 20 20, 40 20, 50 10" stroke="red" fill="transparent" />
      <circle cx="10" cy="10" r="2" fill="red" />
      <circle cx="50" cy="10" r="2" fill="red" />

      <path d="M 70 10 C 70 20, 110 20, 110 10" stroke="red" fill="transparent" />
      <circle cx="70" cy="10" r="2" fill="red" />
      <circle cx="110" cy="10" r="2" fill="red" />

      <path d="M 130 10 C 120 20, 180 20, 170 10" stroke="red" fill="transparent" />
      <path d="M 10 60 C 20 80, 40 80, 50 60" stroke="red" fill="transparent" />
      <path d="M 70 60 C 70 80, 110 80, 110 60" stroke="red" fill="transparent" />
      <path d="M 130 60 C 120 80, 180 80, 170 60" stroke="red" fill="transparent" />
      <path d="M 10 110 C 20 140, 40 140, 50 110" stroke="red" fill="transparent" />
      <path d="M 70 110 C 70 140, 110 140, 110 110" stroke="red" fill="transparent" />
      <path d="M 130 110 C 120 140, 180 140, 170 110" stroke="red" fill="transparent" />
    </svg>
    <svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 10 315
           L 110 215
           A 30 50 0 0 1 162.55 162.45
           L 172.55 152.45
           A 30 50 -45 0 1 215.1 109.9
           L 315 10" stroke="black" fill="green" stroke-width="2" fill-opacity="0.5"
      />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="320" height="320">
      <path
        d="M 10 315
           L 110 215
           A 36 60 0 0 1 150.71 170.29
           L 172.55 152.45
           A 30 50 -45 0 1 215.1 109.9
           L 315 10" stroke="black" fill="green" stroke-width="2" fill-opacity="0.5"
      />
      <circle cx="150.71" cy="170.29" r="2" fill="red" />
      <circle cx="110" cy="215" r="2" fill="red" />
      <ellipse cx="144.931" cy="229.512" rx="36" ry="60" fill="transparent" stroke="blue" />
      <ellipse cx="115.779" cy="155.778" rx="36" ry="60" fill="transparent" stroke="blue" />
    </svg>

    <svg width="325" height="325" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 80 80
           A 45 45, 0, 0, 0, 125 125
           L 125 80 Z" fill="green"
      />
      <path
        d="M 230 80
           A 45 45, 0, 1, 0, 275 125
           L 275 80 Z" fill="red"
      />
      <path
        d="M 80 230
           A 45 45, 0, 0, 1, 125 275
           L 125 230 Z" fill="purple"
      />
      <path
        d="M 230 230
           A 45 45, 0, 1, 1, 275 275
           L 275 230 Z" fill="blue"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss"></style>
