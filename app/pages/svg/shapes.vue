<script setup lang="ts">
defineOptions({
  name: 'SvgShapePage',
})

definePageMeta({
  title: '基本形状',
})
</script>

<template>
  <div class="space-y-10" style="--svg-theme-color: #D1495B">
    <svg width="100%" b>
      <rect x="10" y="10" width="100px" height="100px" fill="var(--svg-theme-color)" />
      <rect x="130" y="10" width="100px" height="100px" stroke="var(--svg-theme-color)" stroke-width="3" fill="none" />
      <rect
        x="250" y="10" rx="10" ry="30" width="100px" height="100px" stroke="var(--svg-theme-color)" stroke-width="3"
        fill="none"
      />
      <text x="10" y="140" font-size="30" fill="var(--svg-theme-color)">&lt;rect /&gt; 矩形</text>
    </svg>
    <svg width="100%" b>
      <circle cx="60" cy="60" r="50" fill="var(--svg-theme-color)" />
      <circle cx="180" cy="60" r="50" stroke="var(--svg-theme-color)" stroke-width="3" fill="none" />
      <text x="10" y="140" font-size="30" fill="var(--svg-theme-color)">&lt;circle /&gt; 圆形</text>
    </svg>
    <svg width="100%" b>
      <ellipse cx="60" cy="60" rx="50" ry="30" fill="var(--svg-theme-color)" />
      <ellipse cx="180" cy="60" rx="50" ry="30" stroke="var(--svg-theme-color)" stroke-width="3" fill="none" />
      <ellipse cx="300" cy="60" rx="50" ry="40" stroke="var(--svg-theme-color)" stroke-width="3" fill="none" />
      <ellipse cx="420" cy="60" rx="50" ry="50" stroke="var(--svg-theme-color)" stroke-width="3" fill="none" />
      <text x="10" y="140" font-size="30" fill="var(--svg-theme-color)">&lt;ellipse /&gt; 椭圆</text>
    </svg>
    <svg width="100%" b>
      <line x1="10" y1="40" x2="110" y2="40" stroke="var(--svg-theme-color)" stroke-width="3" />
      <line x1="10" y1="60" x2="110" y2="60" stroke="var(--svg-theme-color)" stroke-width="3" stroke-dasharray="5,5" />
      <line x1="150" y1="10" x2="250" y2="110" stroke="var(--svg-theme-color)" stroke-width="3" />
      <line
        x1="230" y1="10" x2="330" y2="110" stroke="var(--svg-theme-color)" stroke-width="3"
        stroke-dasharray="10,3"
      />
      <text x="10" y="140" font-size="30" fill="var(--svg-theme-color)">&lt;line /&gt; 线条</text>
    </svg>
    <svg width="100%" b>
      <polyline
        points="10,80 40,10 70,80 100,10 130,80 160,10 190,80" fill="none" stroke="var(--svg-theme-color)"
        stroke-width="3"
      />
      <polyline
        points="210,80 240,10 270,80 300,10 330,80 360,10 390,80" fill="none" stroke="var(--svg-theme-color)"
        stroke-width="3"
      />
      <text x="10" y="140" font-size="30" fill="var(--svg-theme-color)">&lt;polyline /&gt; 折线</text>
    </svg>
    <svg width="100%" b>
      <polygon
        points="10,80 40,10 70,80 100,10 130,80 160,10 190,80" fill="none" stroke="var(--svg-theme-color)"
        stroke-width="3"
      />
      <polygon
        points="210,80 240,10 270,80 300,10 330,80 360,10 390,80" fill="none" stroke="var(--svg-theme-color)"
        stroke-width="3"
      />
      <text x="10" y="140" font-size="30" fill="var(--svg-theme-color)">&lt;polygon /&gt; 多边形</text>
    </svg>
    <svg width="100%" b>
      <path
        d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" fill="none" stroke="var(--svg-theme-color)" stroke-width="3"
      />
      <path
        d="M210 80 Q 240 10, 270 80 T 330 80" fill="none" stroke="var(--svg-theme-color)" stroke-width="3"
      />
      <text x="10" y="140" font-size="30" fill="var(--svg-theme-color)">&lt;path /&gt; 路径</text>
    </svg>
  </div>
</template>
