import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router/admin';
import store from './store';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import './assets/css/common.less';
import './assets/font/iconfont.css';
Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});