<template>
  <div class="login">
    <!-- 关闭界面 -->
    <div class="close">
      <img src="../../../../public/Login/cl9.png" alt="">
    </div>
    <!-- 标题 -->
    <div class="top clearfix">
      <h3>手机号登录/注册</h3>
      <img src="../../../../public/Login/d8f.png" alt="" class="bottom">
      <p>华为用户首次登录额外领<span>最高100元</span>红包</p>
    </div>
    <!-- 用户输入 -->
    <div class="phone">
      <p>中国+86<i></i></p>
      <input type="text" v-model="phone" placeholder="请输入手机号" maxlength="11">
      <img src="../../../../public/Login/fpk.png" alt="">
    </div>
    <!-- 用户输入完成，点击下一步 -->
    <div class="next">
      <mt-button class="btn" disabled>下一步</mt-button>
      <p>未注册的手机号码验证后自动注册</p>
    </div>
    <!-- 快捷方式登录 -->
    <div class="ways">
      <p>第三方账号登录</p>
      <ul>
        <li class="wx">
          <img src="../../../../public/Login/ebr.png" alt="">
          <p>微信</p>
        </li>
        <li class="qq">
          <img src="../../../../public/Login/ebm.png" alt="">
          <p>QQ</p>
        </li>
        <li class="wb">
          <img src="../../../../public/Login/ebq.png" alt="">
          <p>微博</p>
        </li>
        <li>
          <p></p>
          <p>更多</p>
        </li>
      </ul>
    </div>
    <!-- 登录协议 -->
    <div class="xY">
      登录即代表同意《美图点评平台用户服务协议》、《隐私政策》等，接收免除或者限制责任、诉讼管辖约定等粗体表示条款。
    </div>
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
.login{
  padding:30px 15px;
  color:#999;
}
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
    margin-bottom:5px;
  }
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
// 用户输入
.phone{
  margin:60px 0;
  display: flex;
  line-height:48px;
  align-items: center;
  input{
    padding:5px 8px;
    font-size:14px;
    border:none;
    outline:none;
  }
  img{
    width:30px;
    height:30px;
  }
  p{
    margin-right:10px;
    i{
      width:12px;height:12px;
      display:inline-block;
      background:url("../../../../public/Login/dtn.png") no-repeat;
      background-size:12px 12px;
      margin-left:8px;
    }
  }
}
.clearfix:after{
  content:"";
  display:block;
  clear:both;
}
// 按钮
.next{
  text-align: center;
  margin-bottom:120px;
  .btn{
    width:100%;
    border-radius:25px;
    margin-bottom:10px;
    background-color:#ffa111;
    color:#fff;
  }
}
// 第三方快捷登录
.ways{
  ul{
    margin-top:10px;
    padding:0 15px;
    display:flex;
    justify-content: space-between;
    text-align:center;
    font-size:12px;
    li{
      img{
        width:40px;
        border-radius:50%;
      }
    }
  }
}
.wx,.qq,.wb{
  p{
    height:20px;
    line-height:20px;
    margin-top:5px;
  }
}
.wb{
  display:none;
}
// 协议
.xY{
  margin-top:35px;
  font-size:12px;
}
</style>