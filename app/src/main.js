import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import shequ from './components/weProject/shequ.vue'
import buluo from './components/weProject/buluo.vue'
import shequbar from './components/weProject/common/shequbar.vue'
import pllist from './components/weProject/shequ/pllist.vue'

//引入vue-seamless-scroll 插件 
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)

//功能：引入第三方组件库mint-ui
//1.完整引入mint-ui组件库中所有组件
import MintUi from "mint-ui"
//2.单引入mint-ui库中样式文件

import "mint-ui/lib/style.css"
//组件模块
Vue.component("shequ",shequ)
Vue.component("buluo",buluo)
Vue.component("shequbar",shequbar)
Vue.component("pllist",pllist)
//3.将mint-ui注册Vue实例
Vue.use(MintUi)

// 功能：引用vant-ui 组件库
// 导入vant-ui库中所有组件
import Vant, { ImagePreview } from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
//左右滑动
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
// 引入axios
import axios from 'axios';
axios.defaults.baseURL="http://127.0.0.1:5050/";
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  // 获取用户登录成功后存储的登录标志
  let getFlag = localStorage.getItem("Flag");
  // 如果登录标志存在且为isLogin，即用户已登录
  if(getFlag == "isLogin"){
    // 设置vuex登录状态为已登录
    store.state.isLogin = true;
    next()
    // 如果已登录，还想进去登录注册界面，则定向会首页
    if(!to.meta.isLogin){
      // iViewUi友好提示
      iView.Message.error('请先退出登录')
      next({
        paht:"/movie"
      })
    }
  }else{
    // 如果登录标志不存在，即未登录
    if(to.meta.isLogin){
      next({
        path:"/Login"
      })
      iView.Message.info('请先登录')
      // 用户进入无需登录的界面，则跳转继续
    }else{
      next()
    }
  }
})
router.afterEach(route=>{
  window.scroll(0,0);
})
