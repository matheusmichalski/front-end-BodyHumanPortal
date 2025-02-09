<script setup>
//import InputAuthCodeBtn from '@/components/general/auth/InputAuthCodeBtn.vue'
import recovery from '../../components/mobile/recovery/recovery.vue'
import recoveryCode from '@/components/desktop/auth/recoveryCode.vue';
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
  <main>
    <recoveryCode />
  </main>
</template>

<style scoped></style>
