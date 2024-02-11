import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import modulesLoader from './modulesLoader'

const app = createApp(App)
modulesLoader(app)

app.use(createPinia())
app.use(router)

app.mount('#app')
