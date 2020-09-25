import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

import './assets/css/base.css';// ~~ src
import './assets/js/font.js';//字体比值控制



//引入路由配置
import router from './plugins/router.js';

//引入拦截器
import './plugins/axios';

//引入全局过滤器
import './filters';

let vm = new Vue({
  render: h => h(App),
  router,
  data:{
    bNav:false,
    bFoot:false,
    bLoading:true
  }
}).$mount('#app')


export default vm;