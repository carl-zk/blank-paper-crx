import { createApp } from 'vue'
import App from './App.vue'
import { createLogger } from 'vue-logger-plugin'

const prod = import.meta.env.PROD

let log = createLogger({ enabled: true, level: prod ? 'error' : 'debug' })
const app = createApp(App)
app.use(log)
app.mount('#app')
