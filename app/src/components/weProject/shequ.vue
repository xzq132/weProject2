<template>
  <div>
    <!-- 头部打卡模块 -->
    <div class="shequ">
      <div class="shequ_top">
        <!-- 点击打卡 -->
        <img @click="show(1)" v-show="isshow[0].alive==1" src="../../assets/rl.jpg" alt />  
        <span v-show="isshow[0].alive==1">立即打卡</span>
        <!-- 需判断用户是否判断 -->
        <img v-show="isshow[1].alive==1" src="../../assets/rl2.jpg" alt />  
        <span v-show="isshow[1].alive==1">连续打卡{{day}}天</span>
      </div>
      <div class="shequ_top2">
        <div>
          <img src="../../assets/dk.jpg" alt />
          <span>我的帖子</span>
        </div>
        <!--右边箭头图片 -->
        <div class="jian"></div>
        <!-- <div><img class="img" src="../../assets/jt.jpg" alt=""></div> -->
      </div>
    </div>
    <div class="kong"></div>
    <!-- 兴趣部落 -->
    <div class="like">
      <!-- 兴趣头部 -->
      <div class="like_header">
        <span class="like_header_left" @click="gotribe">兴趣部落</span>
        <span class="like_header_right" @click="gotribe">全部</span>
        <div class="jian"></div>
      </div>
      <!-- 兴趣主体内容 -->
      <buluo></buluo>
      <div class="kong"></div>
      <!-- 部落活动 -->
      <div class="like_header">
        <span class="like_header_left" @click="goactivity">活动部落</span>
        <span class="like_header_right huodong" @click="goactivity">6个活动进行中</span>
        <div class="jian"></div>
      </div>
      <!-- 活动部落主体 -->
      <div class="remen">
        <div class="text">热门活动</div>
        <div class="center">发帖送PASS卡&代金券|一城一故事·鹏城食记第60期，加精还能上首页！</div>
        <div class="span1">
          <span class="one">PASS卡&代金卷</span>
          <span class="tow"><i></i>10月9日-10月29日</span>
        </div>
        <div class="span2">
          <span class="one">8858人感兴趣</span>
          <span class="tow">来自部落:深圳吃喝玩乐</span>
        </div>
      </div>
    </div>
    <div class="kong"></div>
    <shequbar></shequbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      day:1,//记录打卡天数
      isshow: [{ alive: 1 }, { alive: 0 }]//控制打卡显示
    };
  },
  methods: {
    gotribe(){
      this.$router.replace("/tribe")//跳转到兴趣部落
    },
    goactivity(){
      this.$router.replace("/activity")//跳转部落活动
    },
    // 控制点赞显示隐藏
    show(n) {
      if (n % 2 != 0) {
        this.day +=1 ;
      }
      for (var i = 0; i < this.isshow.length; i++) {
        if (n == i) {
          this.isshow[i].alive = 1;
        } else {
          this.isshow[i].alive = 0;
          
        }
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.shequ {
  display: flex; //弹性布局
  position: relative;
  // 立即打卡
  .shequ_top {
    text-align: center;
    width: 100px;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #ccc;
    img {
      width: 35px;
    }
    span {
      font-size: 10px;
      display: block;
      margin-top: -8px;
    }
  }
  // 我的帖子
  .shequ_top2 {
    display: flex;
    div {
      display: flex;
      img {
        width: 30px;height:30px;
        margin: 10px;
      }
      span {
        display: block;
        margin-top: 18px;
      }
    }
    .img {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }
}
.kong {
  width: 100%;
  height: 10px;
  background: #eee;
}
// 兴趣部落
.jian {
  //箭头
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0px;
  top: 5px;
  background: url("../../assets/jt.jpg") no-repeat 10px 10px;
  background-size: 50%;
}
// 兴趣部落主体
.like {
  .like_header {
    margin: 10px 20px 5px 10px;
    display: flex;
    justify-content: space-between;
    position: relative;
    .like_header_left {
      font-size: 17px;
      font-weight: bold;
    }
    // 兴趣部落文字
    .like_header_right {
      margin-right: 4px;
      font-size: 15px;
      color: #888;
    }
    // 活动部落文字
    .huodong{
      color:rgb(226, 137, 3);
    }
    .jian {
      right: -18px;
      top: -7px;
    }
  }
  // 部落活动内容
  .remen{
    border-radius: 10px;
    margin:10px;
    box-shadow: 1px 1px 5px #888888;
    .text{
      width: 70px;
      height:20px;
      line-height: 20px;
      color:#eee;
      font-size: 12px;
      text-align: center;
      border-top-left-radius: 10px;
      border-bottom-right-radius: 10px;
      background-image:linear-gradient(to right,#f7551a,#fa997b)
    }
    .center{
      font-weight: bold;
      font-size: 17px;
      margin:5px 15px 5px 15px;
    }
    .span1{
      display: flex;
      justify-content:space-between;
      margin:10px 15px 0px 15px;
      .one{
        border:1px solid #f7551a;
        color:#f7551a;
        font-size: 13px;
      }
      .tow{
        font-size: 15px;
        position: relative;
        i{
          width: 20px;height: 20px;
          position: absolute;
          left:-22px;top:-1px;
          display: block;
          background: url("../../assets/sz.jpg") no-repeat;
          background-size: 117%;
        }
      }
    }
    .span2{
      display: flex;
      justify-content:space-between;
      margin:15px 15px 20px 15px;
      span{
        color:#999;
        font-size: 14px;
      }
    }
  }
}
</style>