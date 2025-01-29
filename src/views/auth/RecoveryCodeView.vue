<script setup>
import InputAuthCodeBtn from '@/components/general/auth/InputAuthCodeBtn.vue'
import recovery from '../../components/mobile/recovery/recovery.vue'
</script>

<template>
  <main class="is-mobile">
    <recovery
      title="Código de recuperação"
      text="Insira o código enviado por email no campo abaixo: "
      type-auth-input="code"
      text-submit-btn="Confirmar"
    />
  </main>
</template>

<style scoped></style>
