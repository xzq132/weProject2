<template>
  <div class="login">
    <!-- 返回上一级界面 -->
    <div class="close" @click="back">
      <img src="../../../../public/Login/cl5.png" alt="">
    </div>
    <!-- 标题 -->
    <div class="top clearfix">
      <h3>验证码登录</h3>
      <p>您输入的号码是<span>+86&nbsp;{{phone}}</span></p>
    </div>
    <!-- 用户输入 -->
    <div class="phone">
      <input type="number" v-model.number="yzm" placeholder="请输入验证码" maxlength="6" @input="input">
      <img :class="btn?'no':'cha'" src="../../../../public/Login/fpk.png" @click="clear">
      <mt-button class="btn" :disabled="disabled" @click="sendcode">{{btntxt}}</mt-button>
    </div>
    <!-- 登录问题 -->
    <div class="ways">
      <p class="question" @click="upwd">密码登录</p>
      <p>收不到验证码？获取语音验证码</p>
    </div>
    <!-- 用户输入完成，点击下一步 -->
    <div class="next">
      <mt-button class="button" v-bind:disabled="btn" @click="next">登录</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      yzm:'',
      btn:true,
      phone:'',
      btntxt:"获取验证码",
      disabled:false,
      time:0
    }
  },
  created() {
    this.getPhone()
  },
  mounted() {
    document.getElementsByTagName("input")[0].focus();
  },
  methods: {
    // 验证码
    sendcode(){
      this.time=60;
      this.disabled=true;
      this.timer();
      // 手机号
    },
    // 验证码倒计时
    timer(){
      if(this.time>0){
        this.time--;
        this.btntxt=this.time+"s后获取";
        setTimeout(this.timer, 1000);
      }else{
        this.time=0;
        this.btntxt="获取验证码";
        this.disabled=false;
      }
    },
    // 点击变成密码登录
    upwd(){
      this.$router.push({path:"/Login2"})
    },
    // 点击返回上一页
    back(){
      this.$router.go(-1);
    },
    // 获取用户输入的手机号
    getPhone(){
      this.phone=localStorage.getItem("phone");
    },
    // 点击右边×的时候回清空input的值
    clear(){
      this.yzm="";
      this.btn=true;
      document.getElementsByTagName("input")[0].focus();
    },
    // 检测验证码的格式
    next(){
      var reg=/\d{1,6}/;
      if(!reg.test(this.yzm)){
        this.$messagebox("提示","验证码格式不正确")
      }
    },
    // 监听用户输入的手机号
    input(){
      var g=/\d{1,6}/;
      if(g.test(this.yzm)){
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
      color:#000;
    }
  }
}
// 用户输入
.phone{
  padding:40px 0 10px;
  line-height:48px;
  display: flex;
  justify-content: space-between;
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
  .btn{
    border-radius:25px;
  }
}
.cha{
  display:block;
}
.no{
  display:none;
}
// 登录问题
.ways{
  display:flex;
  justify-content: space-between;
  line-height:40px;
  font-size:14px;
  color:#00c;
  margin-bottom:20px;
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
</style>