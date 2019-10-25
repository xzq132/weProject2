<template>
  
<div id="SlideBar" class="box">
    <div
      class="item"
      ref="slide"
      :style="slideStyle"
      @touchstart="start($event)"
      @touchmove="move($event)"
      @touchend="end($event)">
      <div class="right">
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
    </div>
    <div class="btn" ref="btn">
      <button>没有啦</button>
      <button style="background:#387ef5;color:#fff">更多</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "SlideBar",
  props: {},
  data() {
    return {
      flag: false,
      startX: 0,
      endX: 0,
      slideStyle: {
        left: 0,
        transition: "none"
      }
    };
  },
  methods: {
    start(e) {
      //记录开始滑动屏幕的X轴的位置
      this.flag = true;
      this.startX = e.touches[0].clientX;
      this.endX = this.$refs.slide.offsetLeft;
      this.slideStyle.transition = "none";
    },
    move(e) {
      if (this.flag) {
        // 处理鼠标移动的逻辑
        var moveX = this.endX + (e.touches[0].clientX - this.startX); //计算滑动的距离
        if (Math.abs(moveX) >= this.$refs.btn.offsetWidth && moveX < 0) {
          //判断滑动的距离是否大于class:btn的宽度
          moveX = (Math.abs(moveX) - this.$refs.btn.offsetWidth) * 0.1; // 0.3阻力系数
          this.slideStyle.left = -this.$refs.btn.offsetWidth - moveX + "px";
        } 
        else if (moveX >= 0) {
          //滑动距离是否大于等于0
          this.slideStyle.left = 0 + "px"; //大于等于0让class:item等于0
        } 
        else {
          this.slideStyle.left = moveX + "px"; //小于0让class:item等于滑动的距离
        }
      }
    },
    end(e) {
      if (this.flag) {
        this.flag = false;
        // endX = slide.offsetLeft;
        var moveX = e.changedTouches[0].clientX - this.startX; //计算滑动的距离
        this.slideStyle.transition = "left .3s";
        var btnWidth = this.$refs.btn.offsetWidth; //class:btn的宽度
        if (moveX < 0) {
          if (
            Math.abs(moveX) >= btnWidth / 2 ||
            Math.abs(this.$refs.slide.offsetLeft) >= this.$refs.btn.offsetWidth
          ) {
            //是否大于class:btn宽度的一半
            this.slideStyle.left = -btnWidth + "px"; //左滑超过class:btn宽度的一半就滑回去
          } else if (Math.abs(moveX) < btnWidth / 2) {
            //小于class:btn宽度的一半
            this.slideStyle.left = 0 + "px"; //左滑没有超过class:btn宽度的一半回原位
          }
        } 
        else if (moveX > 0 && this.endX != 0) {
          if (Math.abs(moveX) >= btnWidth / 2) {
            this.slideStyle.left = 0 + "px"; //右滑超过class:btn宽度的一半就滑回去
          } else if (Math.abs(moveX) < btnWidth / 2) {
            this.slideStyle.left = -btnWidth + "px"; //右滑没有超过class:btn宽度的一半回原位
          }
        }
      }
    }
  },
  mounted() {
    var _this = this;
    // 使用js的现代事件监听transition过渡结束
    this.$refs.slide.addEventListener("transitionend", function() {
      _this.endX = this.offsetLeft;
    });
  }
};
</script>
<style lang="scss" scoped>
.box {
  position: relative;
  width: 603px;
}
.btn {
  height: 100%;
  position: absolute;
  right: -2px;
  top: 0;
  display: flex;
  border: none;
}
button {
  width: 1.5rem;
  height: 100%;
  background: #fff;
  border: none;
}
.item {
  padding: 0.266667rem;
  display: flex;
  position: relative;
  background: #fff;
  z-index: 2;
  box-shadow: 0.026667rem 0 0.053333rem #ddd;
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
