import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import shequ from './components/weProject/shequ.vue'
import buluo from './components/weProject/buluo.vue'
import shequbar from './components/weProject/common/shequbar.vue'

//功能：引入第三方组件库mint-ui
//1.完整引入mint-ui组件库中所有组件
import MintUi from "mint-ui"
//2.单引入mint-ui库中样式文件
import "mint-ui/lib/style.css"
//3.将mint-ui注册Vue实例
Vue.component("shequ",shequ)
Vue.component("buluo",buluo)
Vue.component("shequbar",shequbar)

Vue.use(MintUi)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
