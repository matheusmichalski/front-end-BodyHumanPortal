<script setup>
    import AuthBtnDesktop from './AuthBtnDesktop.vue';
    import SubmitAuthBtn from '@/components/general/auth/SubmitAuthBtn.vue';
    import PasswordBtnDesktop from './PasswordBtnDesktop.vue';
    import GoogleLoginBtn from './GoogleLoginBtn.vue';
</script>
<template>
    <h1>Login</h1>
    <div>
        <AuthBtnDesktop />
        <PasswordBtnDesktop />
    </div>
    <div class="submitBtn">
        <SubmitAuthBtn />
        <p>ou</p>
        <GoogleLoginBtn />
    </div>
    <p>Não tem uma conta? <a href="">Cadastre-se</a></p>
</template>
<style scoped>
h1 {
    font-size: 2rem;
}



</style>