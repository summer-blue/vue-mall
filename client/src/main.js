import Vue from 'vue';
import App from './App';
import router from './router/admin';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common.less';
import './assets/font/iconfont.css';
import './assets/iconfont.css';
// import axios from 'axios';
// Vue.prototype.axios = axios;
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
