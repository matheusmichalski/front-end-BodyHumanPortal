<script setup>
import recovery from '@/components/mobile/recovery/recovery.vue'
import recoveryCode from '@/components/desktop/auth/recoveryCode.vue'
import Loading from '@/components/desktop/elements/Loading.vue'
import { ref, onMounted } from 'vue'
import { useAuth } from '@/stores/authStore'
const code = ref('')

const auth = useAuth()

const handleCode = (value) => {
  code.value = value
}

const verifyToken = async () => {
  console.log('Código:', code.value)
  await auth.verifyTwoAuthToken(code.value)
  if (auth.isLogged) {
    console.log('Login realizado com sucesso!')
  }
}

onMounted(() => {
  console.log(auth.user)
})
</script>

<template>
  <div class="is-mobile">
    <Loading
      redirect-error-loading="/auth/login"
      redirect-success-loading="/minha-conta/profile"
      redirect-success-message="Ver conta"
    />
    <recovery
      title="Código de acesso"
      text="Insira o código enviado por email no campo abaixo: "
      type-auth-input="code"
      text-submit-btn="Confirmar"
      @sendData="handleCode"
      @submit.prevent="verifyToken"
    />
  </div>

  <div class="is-desktop">
    <recoveryCode
      title="Código de acesso"
      text="Insira o código enviado por email no campo abaixo: "
      text-submit-btn="Confirmar"
    />
  </div>
</template>

<style scoped></style>
