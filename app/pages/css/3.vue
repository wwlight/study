<script setup lang="ts">
definePageMeta({
  title: '滑动菜单指示器',
})

const ul = useTemplateRef('ul')
const list = ref<string[]>(['HTML', 'CSS', 'Javascript', 'Nodejs', 'Vue', 'React'])
const style = ref({})

onMounted(() => {
  init()
})

function indicator(e: HTMLElement) {
  Object.assign(style.value, {
    left: `${e.offsetLeft}px`,
    width: `${e.offsetWidth}px`,
    height: `${e.offsetHeight}px`,
  })
}

function init() {
  const firstItem = ul.value!.querySelector('li') as HTMLElement
  firstItem && indicator(firstItem)
}

function handleClick(e: MouseEvent) {
  indicator(e.target as HTMLElement)
}
</script>

<template>
  <ul ref="ul" class="relative" flex="center gap-20">
    <div class="absolute z--1 rd-2 bg-blue-500 transition-all duration-300" :style />
    <li v-for="item in list" :key="item" @click="handleClick">
      {{ item }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul li {
  @apply: list-none px-20 py-10 cursor-pointer text-20 dark:text-white text-black;
}
</style>
