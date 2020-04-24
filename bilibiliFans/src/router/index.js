import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/view/welcome'
import info from '@/view/info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
        path:'/info/:uid',
        name:'info',
        component:info,
    }
  ]
})
