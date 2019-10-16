import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Movie from './components/weProject/movie.vue'
import Login from './components/weProject/common/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/login',component:Login},
    {path:"/Movie",component:Movie},
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
