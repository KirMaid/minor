import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'
import components from '@/components/UI';
console.log(components);

const app = createApp(App);
components.forEach(component=>{
    app.component(component.name,component);
})
app.mount('#app');