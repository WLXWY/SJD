// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Vue.mixin({
//   data(){
//     return {
//       prefix:'lemon-'
//     }
//   },
//   methods:{

//   },
//   beforeCreate() {
//     console.log('混入的生命周期')
//   }
// })

const mixin = {
  methods:{
    $alert(){
      alert('mixin method')
    }
  }
}



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  beforeCreate() {
    console.log('实例的生命周期')
  }
})
