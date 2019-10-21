<template>
  <div>
    <div class="top">
      <div class="tran"></div>
      <ul class="inner-container">
        <li>
          <img src="../../../../public/Login/img_0.jpg" alt="" class="bG">
        </li>
        <li>
          <img src="../../../../public/Login/img_0.jpg" alt="" class="bG">
        </li>
      </ul>
      <img src="../../../../public/Login/cla.png" alt="" class="close">
    </div>
    <div class="logo">
      <img src="../../../../public/Login/ecs.png" alt="">
    </div>
    <div class="Login">
      <div class="text clearfix">
        <img src="../../../../public/Login/d8f.png" alt="" class="bottom">
        <p>新人首次登录额外领<span>最高100元</span>红包</p>
      </div>
      <mt-button class="btn">
        <img src="../../../../public/Login/ebr.png">
        <span>微信一键登录</span>
      </mt-button>
    </div>
    <div class="ways">
      <ul>
        <li @click="phone">
          <img src="../../../../public/Login/phone.jpg">
        </li>
        <li>
          <img src="../../../../public/Login/qq.jpg">
        </li>
        <li>
          <img src="../../../../public/Login/weibo.jpg">
        </li>
      </ul>
      <p>登录即代表同意<span>《美团点评平台用户服务协议》</span>、<span>《隐私政策》</span>等</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  methods: {
    phone(){
      this.$router.push({path:"/Login"})
    }
  },
}
</script>
<style lang="scss" scoped>
.top{
  position: relative;
  width:100%;height:200px;
  overflow: hidden;
  .tran{
    width:100%;
    height:200px;
    z-index:100;
    position:absolute;
    left:0;top:0;
    background:linear-gradient(to top,rgba(255,255,255,1),rgba(255,255,255,0))
  }
  .close{
    width:40px;
    position:absolute;
    top:12px;left:12px;
  }
  .inner-container{
    img{
      width:100%;
    }
  }
}
.logo{
  text-align: center;
  padding:50px 0 70px;
  img{
    width:170px;
  }
}
.Login{
  text-align:center;
  padding:0 14px;
  .text{
    padding:0 28px;
    img{
      width:28px;
      float: left;
    }
    p{
      float: left;
      line-height:28px;
      span{
        color:#ffa159;
      }
    }
  }
  .btn{
    width:100%;
    background: #30ce39;
    border-radius:25px;
    margin-top:5px;
    img{
      width:41px;
    }
    span{
      display: inline-block;
      vertical-align: 14px;
      margin-left:5px;
      color:#fff;
    }
  }
}
.clearfix:after{
  content:"";
  display:block;
  clear:both;
}
.ways{
  text-align:center;
  margin-top:40px;
  ul{
    display:flex;
    justify-content: space-between;
    padding:0 60px;
  }
  img{
    width:50px;;
  }
  p{
    font-size:12px;
    margin-top:20px;
    span{
      color:#008;
    }
  }
}
.inner-container {
  animation: myMove 30s linear infinite;
  animation-fill-mode: forwards;
}
  /*文字无缝滚动*/
@keyframes myMove {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-2577px);
  }
}
</style>