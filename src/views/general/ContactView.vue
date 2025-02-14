<script setup>
import developers from '@/components/desktop/general/contact/developers.vue'
import ourDescription from '@/components/desktop/general/contact/ourDescription.vue'
import developersMobile from '@/components/mobile/general/contact/developersMobile.vue';
import ourDescriptionMobile from '@/components/mobile/general/contact/ourDescriptionMobile.vue';
</script>

<template>
  <main class="is-desktop">
    <developers />
    <ourDescription />
  </main>
  <main class="is-mobile">
    <developersMobile />
    <ourDescriptionMobile />
  </main>
</template>

<style scoped></style>
