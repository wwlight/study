<script setup lang="ts">
defineOptions({
  name: 'Demo',
})

definePageMeta({
  title: '文本反差色效果',
})
</script>

<template>
  <div class="size-full" flex="~ justify-center gap-2xl">
    <div
      class="px-xl rd-2px [isolation:isolate] top-100px absolute of-hidden before:(size-100vw content-[''] [background:linear-gradient(#fff_50%,#000_50%)] left-[calc(50%-50vw)] top-[calc(50%-50vw)] absolute animate-spin animate-duration-3s)"
    >
      <div class="text-300% text-#fff font-800 font-mono size-full [mix-blend-mode:difference] relative z-1">
        文本反差色效果
      </div>
    </div>
    <div
      class="custom-animation px-xl rd-2px [isolation:isolate] top-200px absolute of-hidden before:(bg-#fff size-100vw content-[''] left-0 top-[calc(50%-50vw)] absolute)"
      before-content="left infinite alternate 2s linear"
    >
      <div class="text-300% text-#fff font-800 font-mono size-full [mix-blend-mode:difference] relative z-1">
        文本反差色效果2
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.custom-animation::before {
  animation: left infinite alternate 2s linear;
}

@keyframes left {
  0% {
    left: 0;
  }

  100% {
    left: 100%;
  }
}
</style>
