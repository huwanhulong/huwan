import axios from 'axios';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import NoPage from '../pages/no-page.vue';
import Home from '../pages/home.vue';
import Follow from '../pages/follow.vue';
import Column from '../pages/column.vue';
import Detail from '../pages/detail.vue';
import User from '../pages/user.vue';
import Login from '../pages/login.vue';
import Reg from '../pages/reg.vue';


let routes = [
 {path:'/home',component:Home},
 {path:'/follow',component:Follow},
 {path:'/column',component:Column},
 {path:'/detail/:_id',component:Detail,name:'detail'},
 {path:'/user',component:User},
 {path:'/login',component:Login},
 {path:'/reg',component:Reg},
 {path:'/',redirect:'/home'},
 {path:'*',component:NoPage},
 
];

let router = new VueRouter({
  routes
});

export default router;