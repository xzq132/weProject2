<template>
  <div>
    <!-- 头部打卡模块 -->
    <div class="shequ">
      <div class="shequ_top">
        <img src="../../assets/rl.jpg" alt />
        <!-- 需判断用户是否判断 -->
        <span>立即打卡</span>
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
        <span class="like_header_left">兴趣部落</span>
        <span class="like_header_right">全部</span>
        <div class="jian"></div>
      </div>
      <!-- 兴趣主体图片 -->
      <div
        class="like_img"
        :style="slideStyle"
        @touchstart="start($event)"
        @touchmove="move($event)"
        @touchend="end($event)"  
        >
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      startX: 0, //开始
      endX: 0, //结束
      slideStyle:{
        left:0,
        transition:'none'
      }
    };
  },
  methods: {
    // 记录开始滑动屏幕的x轴的位置
    start(e){
      this.flag=true;
      this.startX=e.touches[0].clientX;
      this.startX=this.$refs.slide.offsetLeft;
      this.slideStyle.transition = 'none';
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
    }
    .like_header_right {
      margin-right: 4px;
      font-size: 15px;
      color: #888;
    }
    .jian {
      right: -18px;
      top: -7px;
    }
  }
  .like_img {
    width: 600px;
    border-top: 1px solid #ccc;
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
}
</style>