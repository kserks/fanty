
import App from './App.vue'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes.js'



const router = createRouter({
  history: createWebHistory(),
  routes
})



const app = createApp(App)

app.use(router)
router.push('/settings')
app.mount('#app')