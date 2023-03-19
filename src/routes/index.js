
import {createWebHistory, createRouter} from 'vue-router';

const HomePage = () => import ('../pages/HomePage.vue');
const ServicesPage = () => import('../pages/ServicesPage.vue');

const router = createRouter ({
    
    history: createWebHistory(),

    routes:[
        {path: '/', name:'HomePage', component:HomePage },
        {path: '/services', name:'ServicesPage', component:ServicesPage },
        
    ],


})

export default  router;