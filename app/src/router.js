import Vue from 'vue'
import Router from 'vue-router'
import Movie from './components/weProject/movie.vue'
import shequheader from './components/weProject/shequheader.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/Movie",component:Movie},
    {path:"/shequheader",component:shequheader},
   
  ]
})
