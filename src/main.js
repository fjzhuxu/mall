// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import './assets/css/base.css'
import './assets/css/checkout.css'
import './assets/css/product.css'
Vue.config.productionTip = false
Vue.use(infiniteScroll);
Vue.use(Vuex);
Vue.use(VueLazyLoad,{
  preLoad: 1.3,
  loading: '/static/loading-svg/loading-bars.svg',
  attempt: 1
})
const store = new Vuex.Store({
  state: {
    nickName:'',
    cartCount:0
  },
  mutations: {
    //更新用户信息
    updateUserInfo(state, nickName) {
      state.nickName = nickName;
    },
    updateCartCount(state,cartCount){
      state.cartCount += cartCount;
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  mounted(){
    this.checkLogin();
  },
  methods:{
    checkLogin(){
      axios.get("users/checkLogin").then(res=> {
        var res = res.data;
        if (res.status == "0") {
          console.log(res);
          this.$store.commit("updateUserInfo", res.result);
        }else{
          if(this.$route.path!="/goods"){
            this.$router.push("/goods");
          }
        }
      });
    }
  },
  // template: '<App/>',
  // components: { App }
  render: h => h(App)
});

//.$mount("#app")
