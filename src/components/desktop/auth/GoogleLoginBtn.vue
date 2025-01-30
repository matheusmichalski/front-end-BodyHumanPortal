<template>
  <div id="buttonDiv"></div>
</template>

<script setup>
function handleCredentialResponse(response) {
  console.log('Encoded JWT ID token: ' + response.credential)
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: import.meta.env.VITE_CLIENT_ID,
    callback: handleCredentialResponse,
  })
  google.accounts.id.renderButton(document.getElementById('buttonDiv'), {
    theme: 'outline',
    size: 'large',
  })
  google.accounts.id.prompt()
}
</script>
