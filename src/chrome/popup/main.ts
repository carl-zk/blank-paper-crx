import { createApp } from 'vue'
import App from './App.vue'
import { createLogger } from 'vue-logger-plugin'
import 'vfonts/Lato.css'
// import 'vfonts/FiraCode.css'
import { router } from './data'


const prod = import.meta.env.PROD
let log = createLogger({ enabled: true, level: prod ? 'error' : 'debug' })

createApp(App).use(log).use(router).mount('#app')
