<script setup>
import GoogleLoginBtn from '@/components/desktop/auth/GoogleLoginBtn.vue'
import LoginBox from '../../components/desktop/auth/LoginBox.vue';
</script>

<template>
  <div class="login">
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

.login {
  border: 1px solid black;
  margin: 8vw 25vw 0 25vw;
}
</style>
