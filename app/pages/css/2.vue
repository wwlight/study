<script setup lang="ts">
definePageMeta({
  title: '渐变发光卡片',
})
</script>

<template>
  <div class="flex flex-wrap justify-center">
    <div class="box">
      <div class="glass" />
      <div class="content">
        <h2>我是渐变发光的边框</h2>
        <p>
          任何时候，无论你面临着生命的何等困惑，抑或经受着多少挫折，无论道路如何的艰难，无论希望变得如何渺茫，请你不要绝望，再试一次，成功一定属于你!
          任何时候，无论你面临着生命的何等困惑，抑或经受着多少挫折，无论道路如何的艰难，无论希望变得如何渺茫，请你不要绝望，再试一次，成功一定属于你!
        </p>
      </div>
    </div>
    <div class="box">
      <div class="glass" />
      <div class="content">
        <h2>我是渐变发光的边框</h2>
        <p>
          任何时候，无论你面临着生命的何等困惑，抑或经受着多少挫折，无论道路如何的艰难，无论希望变得如何渺茫，请你不要绝望，再试一次，成功一定属于你!
          任何时候，无论你面临着生命的何等困惑，抑或经受着多少挫折，无论道路如何的艰难，无论希望变得如何渺茫，请你不要绝望，再试一次，成功一定属于你!
        </p>
      </div>
    </div>
    <div class="box">
      <div class="glass" />
      <div class="content">
        <h2>我是渐变发光的边框</h2>
        <p>
          任何时候，无论你面临着生命的何等困惑，抑或经受着多少挫折，无论道路如何的艰难，无论希望变得如何渺茫，请你不要绝望，再试一次，成功一定属于你!
          任何时候，无论你面临着生命的何等困惑，抑或经受着多少挫折，无论道路如何的艰难，无论希望变得如何渺茫，请你不要绝望，再试一次，成功一定属于你!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  position: relative;
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #060c21;
  margin: 60px 40px;
}

.box::before {
  content: '';
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
}

.box::after {
  content: '';
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  filter: blur(30px);
  z-index: -2;
}

.box:nth-child(1)::before,
.box:nth-child(1)::after {
  background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
}

.box:nth-child(2)::before,
.box:nth-child(2)::after {
  background: linear-gradient(235deg, #ff005e, #010615, #fbff00);
}

.box:nth-child(3)::before,
.box:nth-child(3)::after {
  background: linear-gradient(235deg, #772aff, #010615, #2196f3);
}
.box .glass {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
}

.box .content {
  padding: 20px;
  color: #fff;
  text-align: justify;
  word-break: break-all;
  line-height: 2;
}
</style>
