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
      <!-- <buluo></buluo> -->
      <v-touch @swipeleft="onSwipeLeft" @swiperight="onSwipeRight" tag="div" >
        <div :style="positionjson" :data-left="positionjson.left" class="right">
          <div class="like_img">
            <!-- 第一个 -->
            <div class="like_img_one">
              <img src="../../assets/guanzhu/ch.jpg" alt />
              <div class="tb">
                <i></i>
                <span>1.9万人</span>
              </div>
              <div class="tuijian">深圳吃喝玩乐</div>
            </div>
            <!-- 第二个 -->
            <div class="like_img_one">
              <img src="../../assets/guanzhu/ms.jpg" alt />
              <div class="tb">
                <i></i>
                <span>8.5万人</span>
              </div>
              <div class="tuijian">美食厨房DIY</div>
            </div>
            <!-- 第三个 -->
            <div class="like_img_one">
              <img src="../../assets/guanzhu/xc.jpg" alt />
              <div class="tb">
                <i></i>
                <span>7.9万人</span>
              </div>
              <div class="tuijian">小吃零食</div>
            </div>
            <!-- 第四个 -->
            <div class="like_img_one">
              <img src="../../assets/guanzhu/mz.jpg" alt />
              <div class="tb">
                <i></i>
                <span>1.5万人</span>
              </div>
              <div class="tuijian">美妆美容</div>
            </div>
            <!-- 第五个 -->
            <div class="like_img_one">
              <img src="../../assets/guanzhu/mz.jpg" alt />
              <div class="tb">
                <i></i>
                <span>1.5万人</span>
              </div>
              <div class="tuijian">美妆美容</div>
            </div>
            <!-- 跟多 -->
            <div class="like_img_one">
              <img src="../../assets/guanzhu/mz.jpg" alt />
              <div class="tb">
                <i></i>
                <span>1.5万人</span>
              </div>
              <div class="tuijian">美妆美容</div>
            </div>
          </div>
        </div>
      </v-touch>
      <!--  -->
      <div class="kong"></div>
      <!-- 部落活动 -->
      <div class="like_header">
        <span class="like_header_left" @click="goactivity">活动部落</span>
        <span class="like_header_right huodong" @click="goactivity">6个活动进行中</span>
        <div class="jian"></div>
      </div>
      <!-- 活动部落主体 -->
      <div class="remen"  @click="goactivity">
        <div class="text">热门活动</div>
        <div class="center">发帖送PASS卡&代金券|一城一故事·鹏城食记第60期，加精还能上首页！</div>
        <div class="span1">
          <span class="one">PASS卡&代金卷</span>
          <span class="tow">
            <i></i>10月9日-10月29日
          </span>
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
      day: 1, //记录打卡天数
      isshow: [{ alive: 1 }, { alive: 0 }], //控制打卡显示
      positionjson: {
        left: 0,
        transition: "none",
        lefthe:0,//
        
      }
    };
  },
  methods: {
    // 监听滚动事件
    // 左滑
    onSwipeLeft(data) {
      // console.log(111)
      var lefthe = 0; //检测滑动的位置
      this.positionjson.transition = "";
      console.log(data);
      var x = data.deltaX; //事件执行左滑动的距离
      lefthe = x + lefthe; //滑动的距离记录到lefthe方便下次执行
      // console.log(lefthe);
      if(lefthe<-300){
        lefthe=0;
      }else{
        lefthe=-220;
      }
      this.positionjson.transition = "left .5s";
      this.positionjson.left = lefthe + "px";   //定位移动
      
    },
    // 右滑动
    onSwipeRight(data) {
      this.lefthe=0;
      this.positionjson.transition = "";
      // console.log(data);
      var x = data.deltaX; //事件执行左滑动的距离
      this.lefthe = x + this.lefthe; //滑动的距离记录到lefthe方便下次执行
      // console.log(this.lefthe);
      this.lefthe=0;
      this.positionjson.transition = "left .5s";
      this.positionjson.left = this.lefthe + "px";   //定位移动
    },
    gotribe() {
      this.$router.replace("/tribe"); //跳转到兴趣部落
    },
    goactivity() {
      this.$router.replace("/activity"); //跳转部落活动
    },
    // 控制点赞显示隐藏
    show(n) {
      if (n % 2 != 0) {
        this.day += 1;
      }
      for (var i = 0; i < this.isshow.length; i++) {
        if (n == i) {
          this.isshow[i].alive = 1;
        } else {
          this.isshow[i].alive = 0;
        }
      }
    }
  }
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
        width: 30px;
        height: 30px;
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
    .huodong {
      color: rgb(226, 137, 3);
    }
    .jian {
      right: -18px;
      top: -7px;
    }
  }
  // 部落活动内容
  .remen {
    border-radius: 10px;
    margin: 10px;
    box-shadow: 1px 1px 5px #888888;
    .text {
      width: 70px;
      height: 20px;
      line-height: 20px;
      color: #eee;
      font-size: 12px;
      text-align: center;
      border-top-left-radius: 10px;
      border-bottom-right-radius: 10px;
      background-image: linear-gradient(to right, #f7551a, #fa997b);
    }
    .center {
      font-weight: bold;
      font-size: 17px;
      margin: 5px 15px 5px 15px;
    }
    .span1 {
      display: flex;
      justify-content: space-between;
      margin: 10px 15px 0px 15px;
      .one {
        border: 1px solid #f7551a;
        color: #f7551a;
        font-size: 13px;
      }
      .tow {
        font-size: 15px;
        position: relative;
        i {
          width: 20px;
          height: 20px;
          position: absolute;
          left: -22px;
          top: -1px;
          display: block;
          background: url("../../assets/sz.jpg") no-repeat;
          background-size: 117%;
        }
      }
    }
    .span2 {
      display: flex;
      justify-content: space-between;
      margin: 15px 15px 20px 15px;
      span {
        color: #999;
        font-size: 14px;
      }
    }
  }
}
// 滚动
.right{
  // padding: 0.266667rem;
  display: flex;
  position: relative;
  // background: #fff;
  // z-index: 2;
  // box-shadow: 0.026667rem 0 0.053333rem #ddd;
}
.like_img {
  width: 600px;
  display: flex;

  .like_img_one {
    position: relative;
    width: 110px;
    text-align: center;
    img {
      border-radius: 10px;
      width: 85px;
      margin: 10px 10px 0 10px;
    }
    .tb {
      width: 85px;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      left: 10px;
      bottom: 23px;
      border-radius: 8px;
      color: #bbb;
      i {
        position: absolute;
        left: 10px;
        top: 2px;
        display: block;
        width: 80px;
        height: 20px;
        background: url("../../assets/geb.png") no-repeat;
        background-size: 15%;
      }
      span {
        font-size: 12px;
        margin-left: 10px;
      }
    }
    .tuijian {
      width: 70px;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-left: 14px;
      // margin-top:50px;
    }
  }
}
</style>