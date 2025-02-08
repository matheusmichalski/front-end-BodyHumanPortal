<template>
  <div id="buttonDiv"></div>
</template>

<script setup>
import { useAuth } from '@/stores/authStore'
import { onMounted } from 'vue'

const authStore = useAuth()

async function handleCredentialResponse(response) {
  await authStore.loginWithGoogle(response.credential)
}

onMounted(() => {
  google.accounts.id.initialize({
    client_id: import.meta.env.VITE_CLIENT_ID,
    callback: handleCredentialResponse,
  })
  google.accounts.id.renderButton(document.getElementById('buttonDiv'), {
    theme: 'outline',
    size: 'large',
  })
  google.accounts.id.prompt()
})
</script>

<style scoped>
#buttonDiv {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
  <GoogleLogin @success="onSuccess" @error="onError">
    <button class="">
      <img src="" alt="Google" />
      Login com Google
    </button>
  </GoogleLogin>
</template>

<script setup>
function handleCredentialResponse(response) {
  console.log('Encoded JWT ID token: ' + response.credential)
}

onMounted(() => {
  google.accounts.id.initialize({
    client_id: import.meta.env.VITE_CLIENT_ID,
    callback: handleCredentialResponse,
  })
  google.accounts.id.renderButton(document.getElementById('buttonDiv'), {
    theme: 'outline',
    size: 'large',
  })
  google.accounts.id.prompt()
})
</script>

<style scoped>
#buttonDiv {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
