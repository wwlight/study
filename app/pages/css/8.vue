<script setup lang="ts">
definePageMeta({
  title: '旋转边框',
})
</script>

<template>
  <div class="square dark:after:!bg-white dark:before:!bg-white" />
</template>

<style scoped lang="scss">
@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

.square {
  position: relative;
  margin: auto;
  z-index: 0;
  width: 400px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  padding: 2rem;

  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #eee;
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position: 0 0;
    background-image: conic-gradient(#399953, #399953);
    animation: rotate 4s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: #eee;
    border-radius: 5px;
    animation: opacityChange 3s infinite alternate;
  }
}

@keyframes opacityChange {
  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.5;
  }
}
</style>
