import Vue from 'vue'
import Router from 'vue-router'
import Movie from './components/weProject/movie.vue'
import Login from './components/weProject/common/Login.vue'
import shequheader from './components/weProject/shequheader.vue'
import Gon from './components/weProject/gon.vue'
import G from './components/weProject/g.vue'
import GonChild3 from './components/weProject/gonChild3.vue'
// import myself from './components/weProject/myself.vue'

import tribe from  './components/weProject/tribe.vue'
import activity from './components/weProject/activity.vue'
// import tribalhome from './components/weProject/shequ/tribalhome.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/GonChild3",component:GonChild3},
    {path:"/G",component:G},
    {path:"/Gon",component:Gon},
    {path:"/Movie",component:Movie},
    {path:"/shequheader",component:shequheader},//关注页面
    {path:"/tribe",component:tribe},//兴趣部落页面
    {path:"/activity",component:activity},//部落活动页面
    {path:"/tribalhome",
    component: resolve => require(['@/components/weProject/shequ/tribalhome.vue'], resolve)},//具体部落主页面 濑加载
    
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
