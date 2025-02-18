<script setup>
import signUpDesktop from "@/components/desktop/auth/signUpDesktop.vue";
import Loading from "@/components/desktop/elements/Loading.vue";
import signUpMobile from "@/components/mobile/auth/signUpMobile.vue";
</script>

<template>
  <main class="is-desktop">
    <Loading />
    <signUpDesktop />
  </main>
  <main class="is-mobile">
    <signUpMobile />
  </main>
</template>
