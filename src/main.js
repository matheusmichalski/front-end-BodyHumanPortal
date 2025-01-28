import './assets/main.css'
import { createPinia } from 'pinia'
import GoogleLoginPlugin from 'vue3-google-login'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(GoogleLoginPlugin, {
  clientId: import.meta.env.VITE_CLIENT_ID, // Substitua pelo seu Client ID do Google
})

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons'

library.add(fas, faUserRegular)

app.component('fa', FontAwesomeIcon).mount('#app')
