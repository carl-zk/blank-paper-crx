import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createLogger } from 'vue-logger-plugin'
import App from './App.vue'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import { router } from './data'

const prod = import.meta.env.PROD
const log = createLogger({ enabled: true, level: prod ? 'error' : 'debug' })
const pinia = createPinia()

createApp(App).use(pinia).use(log).use(router).mount('#app')
