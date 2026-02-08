import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({})
const app = createApp(App)
const pinia = createPinia()

app.use(router).use(vuetify).use(pinia)

app.mount('#app')


