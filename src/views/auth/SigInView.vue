<script setup>
import SignInDesktop from '@/components/desktop/auth/SignInDesktop.vue'
import GoogleLoginBtn from '@/components/desktop/auth/GoogleLoginBtn.vue'
</script>

<template>
  <main>
    <SignInDesktop />
    <div>
      <GoogleLoginBtn />
    </div>
  </main>
</template>

<style scoped>
div {
  text-align: center;
}
</style>
