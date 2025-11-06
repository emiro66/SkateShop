import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({})
const app = createApp(App)

app.use(router).use(vuetify)

app.mount('#app')
