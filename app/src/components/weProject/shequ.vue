<template>
  <div>
    <!-- 头部打卡模块 -->
    <div class="shequ">
      <div class="shequ_top">
        <img src="../../assets/rl.jpg" alt="">
        <!-- 需判断用户是否判断 -->
        <span>立即打卡</span>
      </div>
      <div class="shequ_top2">
        <div>
          <img src="../../assets/dk.jpg" alt="">
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
      <div class="like_img">
        <div class="like_img_one">
          <img src="../../assets/guanzhu/ch.jpg" alt="">
          <div class="tb">
            <i></i>
            <span>1.9万人</span>
          </div>
          <div class="tuijian">深圳吃喝玩乐</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.shequ{
  display: flex;//弹性布局
  position: relative;
  // 立即打卡
  .shequ_top{
    text-align: center;
    width:100px;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #ccc;
    img{width: 35px;}
    span{
      font-size: 10px;
      display: block;
      margin-top:-8px;
    }
  }
  // 我的帖子
  .shequ_top2{   
    display: flex;
    div{
      display: flex;  
      img{
        width: 30px;
        margin:10px;
      }
      span{
      display: block;
      margin-top: 18px;
      }
    }
    .img{
     width: 20px;height: 20px;
     position: absolute;
     top:5px;right:0px;
    }   
  } 
}
.kong{
    width: 100%;height:10px;
    background:#eee;
  }
// 兴趣部落
.jian{//箭头
  width: 30px;height: 30px;
  position: absolute;
  right:0px;top:5px;
  background: url("../../assets/jt.jpg") no-repeat 10px 10px ;
  background-size: 50%;
}
.like{
  .like_header{
    margin:10px 20px 5px 10px;
    display: flex;
    justify-content: space-between;
    position: relative;
    .like_header_left{
      font-size: 17px
    }
    .like_header_right{
      margin-right: 4px;
      font-size: 15px;
      color:#888;
    }
    .jian{
      right:-18px;top:-7px;
    }
  }
  .like_img{
    border-top:1px solid #ccc;
    display: flex;
    justify-content: space-between;
    .like_img_one{
      position: relative;
      width: 110px;
      text-align: center;
      img{
        border-radius: 10px;
        width:85px;
        margin:10px;
      }
      .tb{
        position: absolute;
        left:35px;
        top:45px;
        i{
          display: block;
          width: 30px;
          height:30px;
          background: url("../../assets/geb.png") no-repeat;
          background-size: 30%;
        }
        span{
          font-size: 12px;
        }
      }
    }
  }
}

</style>