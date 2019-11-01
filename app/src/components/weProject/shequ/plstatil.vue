<template>
  <div > 
    <div v-for="(item,i) of list" :key="i">
    <!-- 头部导航 -->
    <!-- <div class="home" :style="style">
      <img class="home_left" src="../../../assets/pl.jpg" alt />
      <div>
        <img src="../../../assets/pl.jpg" alt />
        <img src="../../../assets/pl.jpg" alt />
      </div>
    </div>-->
    <!-- 更换后的导航条 -->
    <div class="home" :style="style1">
      <img @click="shequheader" class="home_left" src="../../../../public/Login/cl5.png" alt />
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
    <span class="title">{{item.iheadline}}</span>
    <div class="title_header">
      <span class="header_span1">来自:{{item.itribe}}</span>
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
    <!-- 点赞列表 -->
    <div class="dzlb">
      <span class="dz_header">浏览:{{item.itime}}</span>
      <div class="txlb">
        <!-- 点赞 -->
        <div class="txlb_left" >
          <img class="txlb_left_img"  @click="show(1)" v-show="onclick[0].alive==1" src="../../../assets/dz.jpg" alt />
          <img class="txlb_left_img" @click="show(0)" v-show="onclick[1].alive==1" src="../../../assets/dz2.jpg" alt />
          <span>{{item.dtime}}{{sum}}</span>
        </div>
        <!-- 头像 -->
        <div class="txlb_cont" >
          <img src="../../../assets/pinglun/kf2.jpg" alt="">
          <img src="../../../assets/pinglun/kf2.jpg" alt="">
          <img src="../../../assets/pinglun/kf2.jpg" alt="">
          <img src="../../../assets/pinglun/kf2.jpg" alt="">
          <img src="../../../assets/pinglun/kf2.jpg" alt="">
        </div>
        <!-- 更多 -->
        <div class="txlb_right">
          <img src="../../../../public/Login/d8u.png" alt="">
        </div>
      </div>
      <!-- 评论条数 -->
      <span class="dp">评论（9）</span>
      <div class="dp_one">
        <span><img src="../../../assets/pinglun/kf.jpg" alt=""></span>
        <div class="splick_left"><input type="text" placeholder="说点啥吧！！！" v-model="ccontent" ><button @click="fashong">发送</button></div>
      </div> 
       <!-- 个人评论左 -->
    <div v-for="(item,i) of dianping" :key="i"  class="geren">
      <div class="geren_left">
        <img class="tou" src="../../../assets/pinglun/kf.jpg" alt />
        <img class="tou2" src="../../../../public/myself/enq.png" alt />
      </div>
      <!-- 评论内容 -->
      <div>
        <span class="content1">{{item.cname}}</span>
        <span class="content2">{{item.ctime}}  6月23日</span>
        <span class="content3">{{item.ccontent}}</span>
      </div>
      <span class="pilun">
        <img class="pilun2" src="../../../../public/myself/ffd.png" alt />
        <span class="pilun1">Lv8</span>
      </span>
      <div>
        <span class="guan">关注</span>
      </div>
    </div>
    </div>
    <!-- 下方固定栏 -->
    <div class="splick">
      <div class="splick_left"><input type="text" placeholder="说点啥吧！！！" ></div>
      <div class="splick_right" >
        <!-- 点赞 -->
        <div class="righton" >
          <img  @click="show(1)" v-show="onclick[0].alive==1" src="../../../assets/dz.jpg" alt />
          <img @click="show(0)" v-show="onclick[1].alive==1" src="../../../assets/dz2.jpg" alt />
          <span>{{sum}}</span>
        </div>
        <!-- 收藏 -->
        <div class="righton" >
           <img  @click="show2(0)" v-show="onclick2[1].alive==1" src="../../../../public/myself/co3.png" alt />
          <img @click="show2(1)" v-show="onclick2[0].alive==1" src="../../../../public/myself/di9.png" alt />
          <span>{{sum2}}</span>
        </div>
        <!-- 评论 -->
        <div class="righton" >
          <img src="../../../assets/pl.jpg" alt />
          <span>6</span>
        </div>
      </div>
    </div>
    </div> 
  </div>
</template>
<script>
export default {
  data() {
    return {
      sum:6,
      sum2:2,
      style1: {},
      opacity: 0,
      isshow: 0,
      onclick: [{ alive: 1 }, { alive: 0 }],
      onclick2: [{ alive: 1 }, { alive: 0 }],
      list:[],//帖子详情
      dianping:[],//评论列表
      ccontent:"",//输入的内容
    };
  },
  created() {
    this.locame();
    this. pinglun();
  },
  methods: {
    //发送用户的评论
    fashong(){
      var ccontent=this.ccontent;
      var pid=this.$route.params.pid;
      var obj={pid,ccontent};
      var url='/ccontent';
      // console.log(this.ccontent);
      this.axios.get(url,{params:obj}).then(res=>{
        console.log(res)
      })
    },
    //查询规定帖子id下的评论列表
    locame(){
      var pid=this.$route.params.pid
      // console.log(pid);
      var url='/plasta';
      var obj={pid};
      this.axios.get(url,{params:obj}).then(res=>{
        this.list=res.data.data
        // console.log(this.list)
      })
    },
    //根据帖子id查询帖子下所有用户的评论
    pinglun(){
      var pid=this.$route.params.pid
      var url="/shequheader";
      var obj={pid};
      this.axios.get(url,{params:obj}).then(res=>{
        this.dianping=res.data.data
        console.log(this.dianping)
      })
    },
    // 返回社区
    shequheader(){
      this.$router.replace("/shequheader")
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop);
      // 计算移动距离给透明度的值
      this.opacity = Math.abs(Math.round(scrollTop)) / 200;
      this.style1 = { background: `rgba(256,256,256,${this.opacity})` };
      if (scrollTop > 256) {
        this.isshow = 1;
      } else {
        this.isshow = 0;
      }
    },
    show(n){
       if (n % 2 == 0) {
        this.sum = this.sum - 1;
      } else {
        this.sum = this.sum + 1;
      }
        for (var i = 0; i < this. onclick.length; i++) {
        if (n == i) {
          this. onclick[i].alive = 1;
        } else {
          this. onclick[i].alive = 0;
        }
      }
    },
    show2(n){
       if (n % 2 == 0) {
        this.sum2 = this.sum2 - 1;
        this.$toast("已取消关注")
      } else {
        this.sum2 = this.sum2 + 1;
        this.$toast("关注成功")
      }
        for (var i = 0; i < this. onclick2.length; i++) {
        if (n == i) {
          this. onclick2[i].alive = 1;
           
        } else {
          this. onclick2[i].alive = 0;
          
        }
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
// 点赞评论
.dzlb{
  margin-bottom: 60px;
  margin:0 15px 60px 15px;
  .dz_header{
    font-size: 12px;
    color:#aaa;
  }
  .txlb{
      border-top:1px solid #eee;
      border-bottom:1px solid #eee;
      display: flex;
      justify-content: space-between;
      .txlb_left{  //点赞
        margin-top:10px;
        .txlb_left_img{
          width: 30px;
        }
      }
      .txlb_cont{ //头像
        img{
          width: 35px;
          border-radius: 50%;
          margin:10px;
        }
      }
      .txlb_right{
        margin-top:10px;
      }
    }
  .dp{
    font-size: 20px;
    display: block;
    margin:10px;
  }
  .dp_one{
    display: flex;
    img{
      width: 40px;height:40px;
      border-radius: 50%;
     }
    .splick_left{
      input{
        margin-top: 4px;
        width: 170%;
      }
      
    }
  }
  .geren{
    border-bottom: 1px solid #f5f5f5;
    margin:15px 0;
    .geren_left{
     
    }
    .content1{
      margin-right: 0px;
    }
    .content3{
      margin: 10px 10px;
      font-size: 15px;
    }
  }
}
// 评论框
  .splick_left{
    margin-left: 10px;
    input{
      border:none;
      background:#eee;
      height:35px;
      border-radius: 20px;
      text-indent: 10px;
    }
  }
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
  display:flex;
  justify-content: space-between;
  background: #fff;
  // z-index: 999;
  position: fixed;
  bottom:0px;
  margin:0 15px;
  width: 355px;
  .splick_right{
    display: flex;
    .righton{
      display: block;
      margin:0 3px;
      img{
        width: 27px;
      }
    }
  }
}
</style>