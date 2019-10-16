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
        <div><img class="img" src="../../assets/jt.jpg" alt=""></div>
      </div>
    </div>
    <div class="kong"></div>
    <!-- 兴趣部落 -->
    <div class="like">
      <div class="like_header">
        <span class="like_header_left">兴趣部落</span>
        <span class="like_header_right">全部</span>
        <div><img src="" alt=""></div>
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
     top:5px;
    }
    
  } 
}
.kong{
    width: 100%;height:10px;
    background:#eee;
  }
// 兴趣部落
.like{
  .like_header{
    margin:10px 20px 5px 10px;
    display: flex;
    justify-content: space-between;
    .like_header_left{
      font-size: 17px
    }
    .like_header_right{
      font-size: 15px;
      color:#888;
    }
  }
}

</style>