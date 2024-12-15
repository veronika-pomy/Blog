import './bootstrap';
import { createApp } from 'vue';
import router from './router';
import Mainapp from '../components/Mainapp.vue';

const app = createApp({});

app.use(router);

app.component('Mainapp', Mainapp);

app.mount('#app');