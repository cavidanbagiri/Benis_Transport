
import {createWebHistory, createRouter} from 'vue-router';

const HomePage = ()=>import ('../pages/HomePage.vue');

const router = createRouter ({
    
    history: createWebHistory(),

    routes:[
        {path: '/', name:'HomePage', component:HomePage }
    ]

})

export default  router;