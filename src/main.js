import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

//Themes
import "./assets/css/config/default/bootstrap.min.css";
import './assets/css/config/default/app.min.css';
import './assets/css/icons.min.css';

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
