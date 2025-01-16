import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    //we register all the pats
    routes: [
        //set the component for the specific path
        {
            path: '/teams',
            component: TeamsList
        },
        {
            path: '/users',
            component: UsersList
        }
    ]
});

app.use(router);
app.mount('#app');
