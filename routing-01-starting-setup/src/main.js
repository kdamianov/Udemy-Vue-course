import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    //we register all the pats
    routes: [
        //set the component for the specific path
        //same as "alias: '/'", but it loads different path!
        { path: '/', redirect: '/teams' },
        {
            path: '/teams', 
            component: TeamsList, 
            children: [
                { path: ':teamId', component: TeamMembers, props: true },
            ]
        },
        { path: '/users', component: UsersList },
        //with 'props: true' we define that the dynamic param will be passed as props!

        //dynamic segment for any character combination, must be las, not to override all the above
        { path: '/:notFound(.*)', component: NotFound },
    ]
});

app.use(router);
app.mount('#app');
