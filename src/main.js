import './assets/main.css'
import GoogleLoginPlugin from 'vue3-google-login'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(GoogleLoginPlugin, {
  clientId: import.meta.env.VITE_CLIENT_ID, // Substitua pelo seu Client ID do Google
})

app.mount('#app')
