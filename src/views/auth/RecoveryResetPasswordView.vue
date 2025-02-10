<script setup>
import RecoveryDoubleFields from '@/components/mobile/recovery/recoveryDoubleFields.vue';
import recoveryPassword from '@/components/desktop/auth/recoveryPassword.vue';
</script>

<template>
  <main class="is-mobile">
    <RecoveryDoubleFields
      title="Redefinir senha atual"
      labelText1="Nova senha"
      labelText2="Confirmar a sua senha"
      icon1="eye"
      icon2="eye"
      type-auth-input="text"
      text-submit-btn="Redefinir"
    />
  </main>
  <main>
    <recoveryPassword />
  </main>
</template>
