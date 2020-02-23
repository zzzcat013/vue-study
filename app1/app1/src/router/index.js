import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/alex',
    name: 'Alex',
    component: () => import(/* webpackChunkName: "alex" */ '../views/Alex.vue'),
    children:[
      {
      path: 'info',
      name: 'alex-info',
      component: () => import(/* webpackChunkName: "info" */ '../views/Info.vue'),
    },{
      path: 'youtube',
      name: 'alex-youtube',
      component: () => import(/* webpackChunkName: "youtube" */ '../views/Youtube.vue'),
    }
   ]
  },{
    path: '/iron',
    name: 'iron',
    redirect:'/iron/1'               
  },{
    path: '/iron/:day',
    component: () => import(/* webpackChunkName: "iron" */ '../views/Iron/index.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
