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
      class="[isolation:isolate] absolute top-100px of-hidden rd-2px px-xl before:([background:linear-gradient(#fff_50%,#000_50%)] absolute left-[calc(50%-50vw)] top-[calc(50%-50vw)] size-100vw animate-spin animate-duration-3s content-[''])"
    >
      <div class="[mix-blend-mode:difference] relative z-1 size-full text-300% text-#fff font-800 font-mono">
        文本反差色效果
      </div>
    </div>
    <div
      class="custom-animation [isolation:isolate] absolute top-200px of-hidden rd-2px px-xl before:(absolute left-0 top-[calc(50%-50vw)] size-100vw bg-#fff content-[''])"
      before-content="left infinite alternate 2s linear"
    >
      <div class="[mix-blend-mode:difference] relative z-1 size-full text-300% text-#fff font-800 font-mono">
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
