import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMember from './components/teams/TeamMembers.vue';

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
        ,
        //with 'props: true' we define that the dynamic param will be passed as props!
        { path: '/teams/:teamId', component: TeamMember, props: true},

    ]
});

app.use(router);
app.mount('#app');
