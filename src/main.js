import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons'

// Adicione os ícones à biblioteca
library.add(fas, faUserRegular)

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.component('fa', FontAwesomeIcon)

app.mount('#app')
