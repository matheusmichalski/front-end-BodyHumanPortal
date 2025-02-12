<script setup>
import DashboardDesktop from '@/components/desktop/my-profile/dashboardDesktop.vue'
import dashboardMobile from '@/components/mobile/my-profile/dashboardMobile.vue';
</script>

<template>
  <main class="is-desktop">
    <DashboardDesktop />
  </main>
  <main class="is-mobile">
    <dashboardMobile />
  </main>
</template>
