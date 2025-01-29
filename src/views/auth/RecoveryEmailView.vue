<script setup>
import recovery from '../../components/mobile/recovery/recovery.vue'
</script>

<template>
  <main class="is-mobile">
    <recovery
      title="Email para recuperação"
      text="Essa conta está vinculada ao email xyz******@gmail.com. Confirme o seu email no campo abaixo para receber um código de recuperação:"
      text-auth-input="Email"
      type-auth-input="email"
      text-submit-btn="Enviar código"
      type-auth-icon="envelope"
    />
  </main>
</template>
