import { createApp } from 'vue';

//register components globally
import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';


const app = createApp(App);

app.component('base-badge', BaseBadge);

app.mount('#app');
