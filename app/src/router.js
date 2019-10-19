import Vue from 'vue'
import Router from 'vue-router'
import Movie from './components/weProject/movie.vue'
import Login from './components/weProject/common/Login.vue'
import shequheader from './components/weProject/shequheader.vue'
import Gon from './components/weProject/gon.vue'
import myself from './components/weProject/myself.vue'
import tribe from  './components/weProject/tribe.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/myself',component:myself},
    {path:'/login',component:Login},
    {path:"/Gon",component:Gon},
    {path:"/Movie",component:Movie},
    {path:"/shequheader",component:shequheader},
    {path:"/tribe",component:tribe},
    {
      path: '/',
      name: 'home',
      component: Movie
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
