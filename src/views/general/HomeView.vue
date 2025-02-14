<script setup>
import Banner from '@/components/desktop/general/home/Banner.vue'
import Content from '@/components/desktop/general/home/Content.vue'
import banner from '@/components/mobile/general/home/banner.vue';
import content from '@/components/mobile/general/home/content.vue';
</script>

<template>
  <main class="is-desktop">
    <Banner />
    <Content />
  </main>
  <main class="is-mobile">
    <banner />
    <content />
  </main>
</template>
