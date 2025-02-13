<script setup>
import notFound from '@/components/desktop/elements/notFound.vue';
import notFoundMobile from '@/components/mobile/elements/notFoundMobile.vue';
</script>

<template>
  <main class="is-desktop">
    <notFound />
  </main>
  <main class="is-mobile">
    <notFoundMobile />
  </main>
</template>
