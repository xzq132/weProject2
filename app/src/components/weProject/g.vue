<template>
  
<div class="box">
    <div>
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
  </div>
</template>

<style lang="scss" scoped>

.like_img {
  // width: 600px;
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
