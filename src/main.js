import './assets/main.css'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).use(Antd).mount('#app')

// createApp(App).mount('#app')

