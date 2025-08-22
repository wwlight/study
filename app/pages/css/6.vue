<script setup lang="ts">
definePageMeta({
  title: '瀑布流布局',
})
</script>

<template>
  <div class="masonry space-y-20">
    <div class="item h-460 w-320">
      <img src="https://picsum.photos/320/460?random=1" alt="">
    </div>
    <div class="item h-400 w-320">
      <img src="https://picsum.photos/320/420?random=2" alt="">
    </div>
    <div class="item h-420 w-320">
      <img src="https://picsum.photos/320/400?random=3" alt="">
    </div>
    <div class="item h-430 w-320">
      <img src="https://picsum.photos/320/430?random=4" alt="">
    </div>
    <div class="item h-460 w-320">
      <img src="https://picsum.photos/320/460?random=5" alt="">
    </div>
    <div class="item h-400 w-320">
      <img src="https://picsum.photos/320/400?random=6" alt="">
    </div>
    <div class="item h-420 w-320">
      <img src="https://picsum.photos/320/420?random=7" alt="">
    </div>
    <div class="item h-440 w-320">
      <img src="https://picsum.photos/320/440?random=8" alt="">
    </div>
    <div class="item w-3">
      <img src="https://picsum.photos/320/460?random=9" alt="">
    </div>
    <div class="item h-410 w-320">
      <img src="https://picsum.photos/320/410?random=10" alt="">
    </div>
    <div class="item h-460 w-320">
      <img src="https://picsum.photos/320/460?random=11" alt="">
    </div>
    <div class="item h-450 w-320">
      <img src="https://picsum.photos/320/450?random=12" alt="">
    </div>
    <div class="item h-460 w-320">
      <img src="https://picsum.photos/320/460?random=13" alt="">
    </div>
    <div class="item h-420 w-320">
      <img src="https://picsum.photos/320/420?random=14" alt="">
    </div>
    <div class="item h-440 w-320">
      <img src="https://picsum.photos/320/440?random=15" alt="">
    </div>
    <div class="item h-460 w-320">
      <img src="https://picsum.photos/320/460?random=16" alt="">
    </div>
    <div class="item h-420 w-320">
      <img src="https://picsum.photos/320/420?random=17" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
.masonry {
  column-count: 4;
  column-gap: 5;
}

.item {
  position: relative;
  counter-increment: item-counter;
  background-color: #eee;
}

.item img {
  display: block;
  width: 100%;
  height: auto;
}

.item::before {
  position: absolute;
  left: 5px;
  top: 5px;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: #333;
  color: #fff;
  content: counter(item-counter);
}

/* 弹性布局 */
/* body{
    box-sizing: border-box;
    margin: 10px;
}
.masonry{
    display: flex;
    flex-flow: column wrap;
    height: 1000px;
}
.item{
    box-sizing: border-box;
    width: 25%;
    padding: 5px;
    position: relative;
    counter-increment: item-counter;
}
.item img{
    display: block;
    width: 100%;
    height: auto;
}
.item::before{
    position: absolute;
    left: 5px;
    top: 5px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background: #333;
    color: #fff;
    content: counter(item-counter);
}
.item:nth-child(4n+1){
    order: 1;
}
.item:nth-child(4n+2){
    order: 2;
}
.item:nth-child(4n+3){
    order: 3;
}
.item:nth-child(4n){
    order: 4;
} */
</style>
