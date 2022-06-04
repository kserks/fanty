
import App from './App.vue'
import { createApp } from 'vue'
//import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//import routes from './routes.js'
import store from './store/index.js'

/*
const router = createRouter({
  history: createWebHistory(),
  routes
})

*/

const app = createApp(App)

app.use(store)
//app.use(router)
app.use(ElementPlus)

//router.push('/game')

app.mount('#app')