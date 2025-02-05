<script setup>
import GoogleLoginBtn from '@/components/desktop/auth/GoogleLoginBtn.vue'
import LoginBox from '../../components/desktop/auth/LoginBox.vue';
</script>

<template>
  <div>
    <LoginBox />
  </div>
  <div class="div">
    <GoogleLoginBtn />
  </div>
</template>

<style scoped>
div {
  text-align: center;
}
</style>
