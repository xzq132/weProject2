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
      <input type="number" v-model.number="phone" placeholder="请输入手机号" maxlength="11" @input="input">
      <img :class="btn?'no':'cha'" src="../../../../public/Login/fpk.png" @click="clear">
      <p></p>
    </div>
    <!-- 登录问题 -->
    <p class="question">登录遇到问题</p>
    <!-- 用户输入完成，点击下一步 -->
    <div class="next">
      <mt-button class="button" v-bind:disabled="btn" @click="next">下一步</mt-button>
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
        <li @click="more" id="more">
          <p></p>
          <p>更多</p>
        </li>
      </ul>
    </div>
    <!-- 登录协议 -->
    <div class="xY">
      登录即代表同意<span>《美图点评平台用户服务协议》</span>、<span>《隐私政策》</span>等，接收免除或者限制责任、诉讼管辖约定等粗体表示条款。
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      phone:'',
      btn:true
    }
  },
  mounted() {
    document.getElementsByTagName("input")[0].focus();
  },
  methods: {
    // 点击右边×的时候回清空input的值
    clear(){
      this.phone="";
      this.btn=true;
      document.getElementsByTagName("input")[0].focus();
    },
    // 检测手机号的格式
    next(){
      var reg=/1[358]\d{9}/;
      if(!reg.test(this.phone)){
        this.$messagebox("提示","手机号格式不正确")
      }
    },
    // 监听用户输入的手机号
    input(){
      var g=/\d{1,11}/;
      if(g.test(this.phone)){
        this.btn=false;
      }else{
        this.btn=true;
      }
    },
    // 当点击更多的时候，让微博显示，更多隐藏
    more(){
      // 获取微博
      var wb=document.getElementsByClassName("wb")[0];
      // 微博显示
      wb.style.display="block";
      // 获取更多
      var more=document.getElementById("more");
      // 更多隐藏
      more.style.display="none";
    }
  },
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
.clearfix:after{
  content:"";
  display:block;
  clear:both;
}
// 关闭界面
.close{
  img{
    width:42px;
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
  margin:40px 0 10px;
  display: flex;
  line-height:48px;
  align-items: center;
  border-bottom:1px solid #e5e5e5;
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
.cha{
  display:block;
}
.no{
  display:none;
}
// 登录遇到问题
.question{
  margin-bottom:30px;
  font-size:14px;
  color:#2ab6fa;
}
// 按钮
.next{
  text-align: center;
  margin-bottom:70px;
  button{
    width:100%;
    border-radius:25px;
    margin-bottom:10px;
    // color:#fff;
  }
  .button{
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
  span{
    color:#2ab6fa;
  }
}
</style>