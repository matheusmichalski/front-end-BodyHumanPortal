<script setup>
import SignInDesktop from '@/components/desktop/auth/SignInDesktop.vue'
import Loading from '@/components/desktop/elements/Loading.vue'
</script>

<template>
  <main>
    <Loading
      error-title="Algo deu errado!"
      redirect-error-message="Tentar Novamente"
      redirect-error-loading="/auth/login"
      sucess-title="Sucesso!"
      redirect-success-message="Verificar Código"
      redirect-success-loading="/auth/code"
    />
    <SignInDesktop />
  </main>
</template>
