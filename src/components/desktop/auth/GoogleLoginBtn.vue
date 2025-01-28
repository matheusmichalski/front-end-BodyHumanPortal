<template>
  <GoogleLogin @success="onSuccess" @error="onError">
    <button class="">
      <img src="" alt="Google" />
      Login com Google
    </button>
  </GoogleLogin>
</template>
<script>
export default {
  methods: {
    onSuccess(response) {
      console.log('Login bem-sucedido:', response)
    },
    onError(error) {
      console.error('Erro no login:', error)
    },
  },
}
</script>
