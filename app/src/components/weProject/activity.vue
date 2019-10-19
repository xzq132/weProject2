<template>
  <div>
    <!-- 部落活动头 -->
    <!-- 返回头部 -->
    <mt-header fixed title="部落活动">
      <router-link to="/shequheader" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 活动选项卡 -->
    <div class="tab">
      <span>6个活动进行中</span>
      <div class="tab_right">
        <span @click="show(0)" :class="isshow[0].alive==true?'color':''" >最新</span>
        <span @click="show(1)" :class="isshow[1].alive==true?'color':''">最热</span>
      </div>
    </div>
    <div class="dao"></div>
    <!-- 最热 -->
    <div  v-show="isshow[0].alive==1">
      <!-- 活动主题内容 -->
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
    <!-- 最新 -->
    <div v-show="isshow[1].alive==1">
      <div class="remen">
        <div class="text">热门活动</div>
        <div class="center">VIP福利社|每周翻牌：50份壹点壹客9周年蛋糕兑换卡，叠加PASS卡大礼包！</div>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      isshow: [{ alive: 1 }, { alive: 0 }]
    };
  },
  methods: {
    show(n) {
      for (var i = 0; i < this.isshow.length; i++) {
        if (n == i) {
          this.isshow[i].alive = 1;
          // console.log(n, i);
        } else {
          this.isshow[i].alive = 0;
        }
      }
    },
  }
};
</script>
<style lang="scss" scoped>
/deep/.mint-header-title,
/deep/.mintui {
  color: #000;
  font-size: 17px;
}
/deep/.mintui {
  font-size: 20px;
}
/deep/.mint-header {
  background: #fff;
}
/deep/.mint-header.is-fixed {
  border-bottom: 1px solid #eee;
}
/deep/.van-sidebar {
  background: #f5f5f5;
}
.dao {
  height: 7px;
  width: 100%;
  background: #f5f5f5;
}
// 选项卡
.tab {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  span {
    font-size: 15px;
  }
  .tab_right {
    font-weight: 500;
    span {
      margin: 0 10px;
    }
    .color {
      color: #f76904;
    }
  }
}
// 部落活动内容
  .remen{
    // border:1px solid #ccc;
    box-shadow: 1px 1px 5px #888;
    border-radius: 10px;
    margin:10px;
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
</style>