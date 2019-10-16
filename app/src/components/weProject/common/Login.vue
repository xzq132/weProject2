<template>
  <div>
    <!-- 关闭界面 -->
    <div class="close">
      <img src="../../../../public/Login/cl9.png" alt="">
    </div>
    <!-- 标题 -->
    <div class="top">
      <h3>手机号登录/注册</h3>
      <p>华为用户首次登录额外领<span>最高100元</span>红包</p>
    </div>
    <!-- 用户输入 -->
    <div class="phone">
      中国+86<img src="" alt="">
      <mt-field placeholder="请输入手机号" v-model="phone"></mt-field>
    </div>
    <!-- 用户输入完成，点击下一步 -->
    <div class="next">
      <mt-button class="btn">下一步</mt-button>
      <p>未注册的手机号码验证后自动注册</p>
    </div>
    <!-- 快捷方式登录 -->
    <div class="login"></div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      phone:''
    }
  }
}
</script>
<style lang="scss" scoped>
.close,.top{
    text-align: left;
}
// 关闭界面
.close{
  img{
    width:45px;
  }
}
// 顶部文字
.top{
  margin-top:45px;
  h3{
    font-size:24px;
    font-weight:400;
    color:#000;
  }
}
</style>