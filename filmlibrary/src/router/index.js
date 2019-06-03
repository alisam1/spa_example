import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import task from '@/components/task'
import login from '@/components/auth/login'
import registration from '@/components/auth/registration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/registration',
      name: 'registration',
      component: registration
    },
    {
      path: '/task',
      name: 'task',
      component: task
    },
  ]
})
