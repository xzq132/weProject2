import Vue from 'vue'
import Router from 'vue-router'
import Movie from './components/weProject/movie.vue'
import Login from './components/weProject/common/Login.vue'
import Login1 from './components/weProject/common/Login1.vue'
import Login2 from './components/weProject/common/Login2.vue'
import Login3 from './components/weProject/common/Login3.vue'
import shequheader from './components/weProject/shequheader.vue'
import Gon from './components/weProject/gon.vue'
import G from './components/weProject/g.vue'
import GonChild3 from './components/weProject/gonChild3.vue'
import myself from './components/weProject/myself.vue'
// import tribe from './components/weProject/tribe.vue'
// import myself from './components/weProject/myself.vue'

import tribe from  './components/weProject/tribe.vue'
import activity from './components/weProject/activity.vue'
import tribalhome from './components/weProject/shequ/tribalhome.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/myself',component:myself},
    {path:'/login',component:Login},
    {path:'/login1',component:Login1},
    {path:'/login2',component:Login2},
    {path:'/login3',component:Login3},
    {path:"/Gon",component:Gon},
    {path:"/Movie",component:Movie},
    {path:"/shequheader",component:shequheader},//关注页面
    {path:"/tribe",component:tribe},//兴趣部落页面
    {path:"/activity",component:activity},//部落活动页面
    {path:"/tribalhome",component:tribalhome},//具体部落主页面
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
