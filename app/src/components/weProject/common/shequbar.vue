<template>
<div>
  <mt-navbar class="xintie" v-model="isxintie">
     <mt-tab-item id="lm" @click.native="isxuan(0)"><a :class="xuan[0].show==true?'hover':''">热门</a></mt-tab-item>
    <mt-tab-item id="xt"  @click.native="isxuan(1)" ><a :class="xuan[1].show==true?'hover':''">我的部落新帖</a></mt-tab-item>
  </mt-navbar>
  <mt-tab-container class=xintie_nei v-model="isxintie">
    <mt-tab-container-item  id="lm">
      <!-- 热门 -->   
    <div class="lemen">
      <!-- 评论标题 -->
      <div class="lm_header">
        <div class="lm_header_left">
          <img src="../../../assets/guanzhu/ms.jpg" alt="">
          <div class="text">
            <div class="text_top">美食厨房DIY</div>
            <div class="text_bom">8.5万成员已加入</div>
          </div>
        </div>
        <div class="lm_header_right">
          <div class="right_left">
            <img class="stree" src="../../../assets/guanzhu/ms.jpg" alt="">
            <img class="tow" src="../../../assets/guanzhu/xc.jpg" alt="">
            <img class="one" src="../../../assets/guanzhu/mz.jpg" alt=""> 
          </div>
          <div class="jian"></div>
        </div>  
      </div>
      <!-- 评论内容 -->
      <div class="conter">
          <div class="conter_left">
            <div class="conter_top">
              <span class="span1">精华</span>
              <span class="span2">小身材，大美味！干炸小黄鱼别说你不爱吃</span>
            </div>
            <div class="conter_conter">来着用户:笺短移馋</div>
            <div class="conter_botom">浏览364</div>
          </div>
          <div><img src="../../../assets/guanzhu/ms.jpg" alt=""> </div> 
      </div>
      <!-- 点赞处 -->
      <div class="dz">
        <div class="dz_left">
          <div><img src="../../../assets/dz.jpg" alt=""></div>
          <span>100</span>
            <div class="right_left">
              <img class="stree" src="../../../assets/guanzhu/ms.jpg" alt="">
              <img class="tow" src="../../../assets/guanzhu/xc.jpg" alt="">
             <img class="one" src="../../../assets/guanzhu/mz.jpg" alt=""> 
            </div>
          
        </div>   
        <div class="dz_right">
          <img src="../../../assets/pl.jpg" alt="">
          <span>52</span>
          <img src="../../../assets/zf.jpg" alt="">
        </div>
      </div>
      <ul class="plx">
        <li>
          <span class="pl1">800_蚊子12385:</span>
          <span class="pl2">支持</span>
        </li>
        <li>
          <span class="pl1">800_蚊子12385:</span>
          <span class="pl2">666</span>
        </li>
        <li>
          <span class="pl1">800_蚊子12385:</span>
          <span class="pl2">很好</span>
        </li>
        <li><span class="pl3">查看全部52条评论</span></li>
      </ul>
    </div>
    <div class="kong"></div>
    </mt-tab-container-item>
  
    <mt-tab-container-item id="xt">
      <!-- 我的部落新帖 -->
    </mt-tab-container-item>
  </mt-tab-container>
</div> 
</template>
<script>
export default {
  data() {
    return {
      isxintie: "lm",
      xuan: [{ show: true }, { show: false }]
    };
  },
  methods: {
    isxuan(n) {
      for (var i = 0; i < this.xuan.length; i++) {
        if (n == i) {
          this.xuan[i].show = true;
        } else {
          this.xuan[i].show = false;
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
// 箭头
.jian {
  //箭头
  width: 30px;
  height: 30px;
  position: absolute;
  right: 4px;
  top: 28px;
  background: url("../../../assets/jt.jpg") no-repeat 10px 10px;
  background-size: 50%;
} 
.mint-navbar {
  border-bottom: 1px solid #ccc;
}
/deep/.mint-tab-item-label {
  a {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    padding-bottom: 14px;
  }
  .hover {
    border-bottom: 3px solid #f7551a;
    color: #f7551a;
  }
}
/deep/.mint-navbar .mint-tab-item.is-selected {
  border: none;
}
// 评论
.lemen {
  margin: 10px;
  // 评论主表题
  .lm_header {
    background: #f5f5f5;
    
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    .lm_header_left {
      display: flex;
      img {
        width: 50px;
        height: 50px;
        margin: 12px;
        border-radius: 8px;
      }
      .text {
        margin-top: 13px;
        .text_top {
          font-weight: bold;
        }
        .text_bom {
          font-size: 13px;
          color: #333;
        }
      }
    }
    // p评论头像
    .lm_header_right {
      .right_left {
        position: relative;
        img {
          position: absolute;
          top: 23px;
          right: 15px;
          width: 25px;
          border-radius: 50%;
          border: 1px solid #fff;
        }
        .tow {
          right: 30px;
        }
        .stree {
          right: 45px;
        }
      }
    }
  }
  // 评论主内容
  .conter{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .conter_left{
      color: #000;
      margin-top: 10px;
      .conter_top{
        .span1{
          display: inline;
          padding:3px;
          border-radius: 3px;
          text-align: center;
          color:rgb(102, 109, 3);
          font-size: 14px;
          line-height: 22px;
          background-image: linear-gradient(to right,rgb(42, 1, 1),rgb(10, 10, 6))
        }
        .span2{
          font-weight: bold;
        }
      }
      .conter_conter,.conter_botom{
        margin:5px 0 10px 0;
        font-size: 12px; 
        color: #333;
      }
      
    }
    img{
      width: 100px;
      border-radius: 5px;
      margin-left: 10px;
    }
  }
  // 点赞处
  .dz{
    display: flex;
    justify-content: space-between;
    .dz_left{
      display: flex;
      img{width: 28px};
      span{
        margin-left: 5px;
        margin-top: 7px;
      }
      .right_left{
        position:relative;
        margin-left: 10px;
        img{
          border-radius: 50%;
          width: 25px;
          border-radius: 50%;
          border: 1px solid #fff;
          position: absolute;
        }
        .one{
          left: 30px;
        }
        .tow {
          left: 15px;
        }
      }
    }
    .dz_right{
      display: flex;
      img{width:28px ;}
      span{
        margin-top: 8px;
        margin-right: 10px;
        }
    }
  }
  // 评论详情
  .plx{
    list-style: none;
    margin:15px 0px 15px 0px;
    li{
      .pl1,.pl2{  
        font-size: 15px;
      }
      .pl1{
        color: #05989c;
      }
      .pl3{
        display: block;
        font-size: 14px;
        margin-top: 5px;
        color:#666;
      }      
    }
  }
}
// 空
.kong {
  width: 100%;
  height: 10px;
  background: #eee;
}
</style>