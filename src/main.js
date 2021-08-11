import { createApp } from 'vue'
import App from './App.vue'
import animated from 'animate.css'
import element from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';


const app = createApp(App)
app.use(animated).use(element).mount('#app')
