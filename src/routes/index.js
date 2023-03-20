
import {createWebHistory, createRouter} from 'vue-router';

const HomePage = () => import ('../pages/HomePage.vue');
const ServicesPage = () => import('../pages/ServicesPage.vue');
const AboutPage = () => import('../pages/AboutPage.vue');

const router = createRouter ({
    
    history: createWebHistory(),

    routes:[
        {path: '/', name:'HomePage', component:HomePage },
        {path: '/services', name:'ServicesPage', component:ServicesPage },
        {path: '/about', name:'AboutPage', component:AboutPage },
        
    ],


})

export default  router;