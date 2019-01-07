
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Admin from '@/views/Admin'
import Login from '@/views/Login'
import User from '@/views/user'
import Menu from '@/views/Menu'
import UserDetail from '@/views/UserDetail'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        haha:100
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta:{
        auth_login:true
      },
      children:[
        {
          path:'user',
          name:'User',
          component:User,
          children:[
            {
            path:':name',
            name:'UserDetail',
            component:UserDetail
           }
          ]
        },
        {
          path:'Menu',
          name:'Menu',
          component:Menu
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
