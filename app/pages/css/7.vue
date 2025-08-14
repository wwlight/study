<script setup lang="ts">
definePageMeta({
  title: '图片懒加载',
})

const images = ref<any[]>([])

onMounted(() => {
  images.value.forEach((img) => {
    const { stop } = useIntersectionObserver(img, ([entry]) => {
      if (entry?.target && entry?.isIntersecting) {
        (entry.target as HTMLImageElement)!.src = entry.target.getAttribute('data-src') ?? ''
        stop()
      }
    })
  })
})
// IntersectionObserver API 使用教程
// https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html
</script>

<template>
  <div class="my-20 text-center dark:text-white">
    <h2>同王征君湘中有怀</h2>
    <b>张谓〔唐代〕</b>
    <p>八月洞庭秋，潇湘水北流。</p>
    <p>还家万里梦，为客五更愁。</p>
    <p>不用开书帙，偏宜上酒楼。</p>
    <p>故人京洛满，何日复同游。</p>
    <h2>湘中酬张十一功曹</h2>
    <b>韩愈〔唐代〕</b>
    <p>休垂绝徼千行泪，共泛清湘一叶舟。</p>
    <p>今日岭猿兼越鸟，可怜同听不知愁</p>
    <h2>同王征君湘中有怀</h2>
    <b>张谓〔唐代〕</b>
    <p>八月洞庭秋，潇湘水北流。</p>
    <p>还家万里梦，为客五更愁。</p>
    <p>不用开书帙，偏宜上酒楼。</p>
    <p>故人京洛满，何日复同游。</p>
    <h2>湘中酬张十一功曹</h2>
    <b>韩愈〔唐代〕</b>
    <p>休垂绝徼千行泪，共泛清湘一叶舟。</p>
    <p>今日岭猿兼越鸟，可怜同听不知愁</p>
    <img :ref="el => images.push(el)" data-src="https://picsum.photos/360/460?random=1" class="mx-a h-460 w-360">
    <h2>同王征君湘中有怀</h2>
    <b>张谓〔唐代〕</b>
    <p>八月洞庭秋，潇湘水北流。</p>
    <p>还家万里梦，为客五更愁。</p>
    <p>不用开书帙，偏宜上酒楼。</p>
    <p>故人京洛满，何日复同游。</p>
    <h2>湘中酬张十一功曹</h2>
    <b>韩愈〔唐代〕</b>
    <p>休垂绝徼千行泪，共泛清湘一叶舟。</p>
    <p>今日岭猿兼越鸟，可怜同听不知愁</p>
    <h2>同王征君湘中有怀</h2>
    <b>张谓〔唐代〕</b>
    <p>八月洞庭秋，潇湘水北流。</p>
    <p>还家万里梦，为客五更愁。</p>
    <p>不用开书帙，偏宜上酒楼。</p>
    <p>故人京洛满，何日复同游。</p>
    <h2>湘中酬张十一功曹</h2>
    <b>韩愈〔唐代〕</b>
    <p>休垂绝徼千行泪，共泛清湘一叶舟。</p>
    <p>今日岭猿兼越鸟，可怜同听不知愁</p>
    <img :ref="el => images.push(el)" data-src="https://picsum.photos/360/460?random=2" class="mx-a h-460 w-360">
    <img :ref="el => images.push(el)" data-src="https://picsum.photos/360/460?random=3" class="mx-a h-460 w-360">
  </div>
</template>
