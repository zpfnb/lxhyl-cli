import Vue from 'vue';
import App from './App.vue';

//axios
import axios from 'axios';
Vue.prototype.$axios = axios;
//允许跨域
axios.defaults.withCredentials =true;

//vue-router
import VueRouter from 'vue-router';
import router from './router/router';
Vue.use(VueRouter);

//vuex
import store from './store/index'

//element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
