// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview';
import 'iview/dist/styles/iview.css'

Vue.use(iview)
Vue.config.productionTip = false

router.beforeEach((to,from,next) => {
  // console.log(to)
  // console.log(from)
  // alert(1)
  if(to.meta.auth_login){
    if(localStorage.getItem('token')){
      next();
    }else{
      next('/Login')
    }
  }else{
    next();
  }
 
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

