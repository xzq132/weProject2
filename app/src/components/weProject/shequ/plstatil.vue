<template>
  <div>
    <!-- 头部导航 -->
    <!-- <div class="home" :style="style">
      <img class="home_left" src="../../../assets/pl.jpg" alt />
      <div>
        <img src="../../../assets/pl.jpg" alt />
        <img src="../../../assets/pl.jpg" alt />
      </div>
    </div>-->
    <!-- 更换后的导航条 -->
    <div class="home" :style="style">
      <img class="home_left" src="../../../../public/Login/cl5.png" alt />
      <div v-show="isshow" class="home_left2">
        <div class="img">
          <img class="img_l" src="../../../assets/pinglun/kf2.jpg" alt />
          <img class="img_r" src="../../../../public/myself/enq.png" alt />
        </div>
        <div class="text">
          <span class="yong">Ca糖豆n豆儿dy</span>
          <span class="guan">关注</span>
        </div>
      </div>
      <div>
        <img src="../../../assets/pl.jpg" alt />
        <img src="../../../assets/pl.jpg" alt />
      </div>
    </div>
    <!-- 图片 -->
    <img class="conten" src="../../../assets/pinglun/xc.jpg" alt />
    <!-- 用户头像 -->
    <!-- 个人中心标题 -->
    <div class="geren">
      <div class="geren_left">
        <img class="tou" src="../../../assets/pinglun/kf.jpg" alt />
        <img class="tou2" src="../../../../public/myself/enq.png" alt />
      </div>
      <div>
        <span class="content1">Ca糖豆n豆儿dy</span>
        <span class="content2">6月23日</span>
      </div>
      <span class="pilun">
        <img class="pilun2" src="../../../../public/myself/ffd.png" alt />
        <span class="pilun1">Lv8</span>
      </span>
      <div>
        <span class="guan">关注</span>
      </div>
    </div>
    <!-- 评论标题 -->
    <span class="title">龙华区不错的西餐推荐分享</span>
    <div class="title_header">
      <span class="header_span1">来自:深圳吃喝玩乐</span>
      <span class="header_span2">1.9万成员已加入</span>
    </div>
    <!-- 评论主体 -->
    <div class="pinlun">
      <span class="pinlun_text">
        中了点评的同城聚会，店家贴心的安排了包房给我们～菜品以虾为主，据说都是从澳洲进口过来的，菜品里面虾的品种都是澳洲的小青龙～
        |蒜香澳洲小青龙^虾线已经被处理干净，店长小哥哥帮我们现场师范了如何把虾肉取出来，蒜香的味道很不错，吃完汤汁里面加|面条^煮，面条吃起来有嚼劲，配上蒜香、微甜的口感，很不错～
      </span>
      <img class="pinlun_img" src="../../../assets/pinglun/pl1.jpg" alt />
      <span
        class="pinlun"
      >清蒸澳龙^一盘不够吃，还给我们增加了一盘。虾是完整的，剥起来比较费劲个，这个都是服务员小哥哥小姐姐帮剥的，虾体大肥美、肉质饱满，有些还有虾黄，搭配蒜香或者芥末调料，吃起来很满足～</span>
      <img class="pinlun_img" src="../../../assets/pinglun/pl2.jpg" alt />
      <span class="pinlun_text">|香辣澳洲小龙虾^口感香辣，味道比较清，虾还是很好吃，用汤汁煮面没有蒜香的好吃～</span>
      <img class="pinlun_img" src="../../../assets/pinglun/pl3.jpg" alt />
      <span class="pinlun_text">|酱香辣蟹^满满的一盆，蟹个头蛮大，辣度正好，蟹黄没看到，蟹肉很好吃，搭配娃娃菜、豆皮等，味道不错～</span>
      <img class="pinlun_img" src="../../../assets/pinglun/pl4.jpg" alt />
      <span class="pinlun_text">烧烤有|扇贝^、|烤鸡脆骨^、|鸡蛋豆腐皮^、|鸡脚筋^、|馒头^～鸡脚筋比较硬一些，其他都还不错～</span>
      <img class="pinlun_img" src="../../../assets/pinglun/pl5.jpg" alt />
      <span class="pinlun_text">小菜有|口水毛豆^、|无骨凤爪^、|麻辣小皮蛋^、|花生米^，以及水果茶～</span>
      <img class="pinlun_img" src="../../../assets/pinglun/pl6.jpg" alt />
      <span class="pinlun_text">服务员小哥哥小姐姐很热情～环境装修的也蛮温馨，晚餐时间人很多，服务员小哥哥小姐姐很忙～</span>
      <img class="pinlun_img" src="../../../assets/pinglun/pl7.jpg" alt />
    </div>
    <div class="splick">
      <input type="text" placeholder="说点啥吧！！！">
      <span></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      style: {},
      opacity: 0,
      isshow: 0
    };
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
      // 计算移动距离给透明度的值
      this.opacity = Math.abs(Math.round(scrollTop)) / 200;
      this.style = { background: `rgba(256,256,256,${this.opacity})` };
      if (scrollTop > 256) {
        this.isshow = 1;
      } else {
        this.isshow = 0;
      }
    }
  },
  mounted() {
    //监听滚动事件
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="scss" scoped>
// 关注
.guan {
  border: 1px solid #fd4800;
  color: #fd4800;
  border-radius: 10px;
  padding: 1px 10px 0px 10px;
  font-size: 12px;
  margin-left: 5px;
}
//  用户头像
// 个人中心
.geren {
  margin: 15px;
  display: flex;
  .geren_left {
    position: relative;
    .tou {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
    .tou2 {
      width: 18px;
      position: absolute;
      top: 26px;
      right: -1px;
      border: 1px solid #fff;
      border-radius: 50%;
    }
  }
  span {
    margin: 0px 10px;
    display: block;
  }
  .content1 {
    color: #05989c;
  }
  .content2 {
    font-size: 12px;
    color: #aaa;
  }
  .pilun {
    position: relative;
    .pilun2 {
      width: 25px;
      position: absolute;
      left: -1px;
      top: -3px;
    }
    .pilun1 {
      font-size: 15px;
      font-weight: bold;
      display: inline;
      background: #000;
      color: #ffe4bb;
      line-height: 20px;
      height: 20px;
      padding: 0 10px;
      border-radius: 10px;
    }
  }
}
// 头部tar
.home {
  display: flex;
  justify-content: space-between;
  height: 60px;
  position: fixed;
  width: 100%;
  top: 0px;
  border-bottom: 1px solid #eee;
  // position: relative;
  z-index: 999;
  // background: #fff; //移动鼠标显示白色背景
  .home_left {
    width: 40px;
    height: 40px;
    margin: 10px 0px 10px 10px;
  }
  //头二
  .home_left2 {
    display: flex;
    position: absolute;
    left: 40px;
    .img {
      position: relative;
      .img_l {
        width: 30px;
        margin-top: 15px;
      }
      .img_r {
        width: 13px;
        position: absolute;
        border: 2px solid #fff;
        left: 17px;
        bottom: 5px;
      }
    }

    .text {
      line-height: 60px;
      .yong {
        color: #40718c;
        font-size: 15px;
      }
    }
  }
  img {
    width: 40px;
    border-radius: 50%;
    margin: 10px;
  }
}
//  土体
.conten {
  width: 100%;
  margin-top: -60px;
}
// 标题
.title {
  font-size: 19px;
  font-weight: bold;
  margin: 15px;
}
.title_header {
  margin: 15px;
  height: 50px;
  line-height: 50px;
  background: #f7f7f7;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  .header_span1 {
    margin-left: 8px;
    font-size: 15px;
  }
  .header_span2 {
    font-size: 13px;
  }
}
// 评论主体
.pinlun {
  margin: 10px 15px 15px 15px;
  .pinlun_text {
    line-height: 27px;
  }
  .pinlun_img {
    width: 100%;
  }
}
// 说点啥
.splick{
  padding:5px 15px 5px 15px;
}
</style>