import Vue from 'vue'
import Router from 'vue-router'
import Movie from './components/weProject/movie.vue'
import Login from './components/weProject/common/Login.vue'
import shequheader from './components/weProject/shequheader.vue'
import Gon from './components/weProject/gon.vue'
import G from './components/weProject/g.vue'
import GonChild3 from './components/weProject/gonChild3.vue'
import tribe from "./components/weProject/tribe.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/GonChild3",component:GonChild3},
    {path:"/G",component:G},
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
