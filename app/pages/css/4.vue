<script setup lang="ts">
definePageMeta({
  title: '百叶屏效果',
})

const list = ref([
  {
    name: '蜂鸟配送',
    intro: '全职收入多劳多得',
    intro2: '稳定保障风险少',
    icon: 'https://cube.elemecdn.com/0/c7/731d222b16d4537c0dcb5dfdc0402svg.svg',
  },
  {
    name: '代理加盟',
    intro: '共创合作，领跑市场',
    intro2: '专业扶持为你保驾护航',
    icon: 'https://cube.elemecdn.com/a/0a/2e70985f1636fdad57a357eb53639svg.svg',
  },
  {
    name: '商家开店',
    intro: '多一种开店方式',
    intro2: '连接千家万户的餐桌',
    icon: 'https://cube.elemecdn.com/0/28/e556e02b60a8a25e1d3d6ef676523svg.svg',
  },
  {
    name: '外卖点餐',
    intro: '准时必达，超时秒赔',
    intro2: '每天领取惊喜红包',
    icon: 'https://cube.elemecdn.com/a/3d/28b5752f53afa76c5abf902f78355svg.svg',
  },
])
const activeIndex = ref(0)
</script>

<template>
  <div class="shutter-screen">
    <a v-for="item, index in list" :key="index" href="#" class="item" :class="[index === activeIndex && 'active']" @mouseenter="activeIndex = index">
      <div class="show">
        <img :src="item.icon" :alt="item.name">
        <p>{{ item.intro }}<br>{{ item.intro2 }}</p>
      </div>
      <div class="item-main">{{ item.name }}</div>
    </a>
  </div>
</template>

<style scoped lang="scss">
.shutter-screen {
  width: 100%;
  height: 100%;
  /* display: grid;
    grid-auto-flow: row;
    place-content: center center;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: 300px;
    column-gap: 30px; */
  display: flex;
  justify-content: center;
  align-items: center;

  .item {
    width: 100px;
    height: 300px;
    margin: 0 15px;
    border-radius: 6px;
    background: rgb(2, 182, 253);
    opacity: 0.5;
    position: relative;
    overflow: hidden;
    transition: all 0.5s;

    .show {
      width: 400px;
      height: 300px;
      position: absolute;
      left: -400px;
      top: 0;
      transition: all 0.5s;

      > p {
        position: absolute;
        bottom: 2em;
        left: 2em;
        line-height: 2;
        margin: 0px;
        color: #fff;
        /* white-space: pre; */
        font-weight: bold;
        letter-spacing: 1px;
      }

      img {
        max-width: 256px;
        height: 256px;
        top: 22px;
        left: 22px;
        margin: auto;
        position: absolute;
        opacity: 0.16;
      }
    }

    .item-main {
      width: 100px;
      height: 300px;
      font-size: 22px;
      letter-spacing: 0.55em;
      font-weight: bold;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      writing-mode: vertical-lr;
      position: absolute;
      right: 0;
      top: 0;
    }

    &.active {
      width: 500px;
      height: 300px;
      opacity: 1;

      .show {
        left: 0;
      }
    }
  }
}
</style>
