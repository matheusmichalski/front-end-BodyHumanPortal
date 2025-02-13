import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Importação do FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons'

// Adicione os ícones à biblioteca
library.add(fas, faUserRegular)

// Criação do app Vue e do Pinia
const pinia = createPinia()
const app = createApp(App)

app.use(pinia) //
app.use(router)
app.component('fa', FontAwesomeIcon)

// Montagem do app
app.mount('#app')
