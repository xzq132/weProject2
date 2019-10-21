<template>
  <div>
    <!-- 页面头导航 -->
    <div class="home" v-show="searchBar">
      <img src="../../../assets/pl.jpg" alt />
      <span class="text">{{home}}</span>
      <img src="../../../assets/pl.jpg" alt />
    </div>

    <div class="jieshao">
      <!-- 放回转发 -->
      <div class="zhuang">
        <img src="../../../assets/pl.jpg" alt />
        <img src="../../../assets/pl.jpg" alt />
      </div>
      <!-- 头图片介绍 -->
      <div class="jieshao_header">
        <div>
          <img src="../../../assets/guanzhu/ch.jpg" alt />
        </div>
        <div class="jieshao_right">
          <div class="rig_one">{{home}}</div>
          <div class="rig_two">178万篇帖子</div>
          <div
            class="rig_there"
          >即日起，鹏城吃喝玩乐正式更名为深圳吃喝玩乐。这是一个圈子，包容所有关于身边的一切，美食、旅行、生活、八卦、情感等等。欢迎分享你生活中的点点滴滴，找到志同道合的朋友，成为彼此的知己！，</div>
        </div>
      </div>
      <!-- 显示加入部落成员头像 -->
      <div class="add">
        <span>共{{sum}}名成员</span>
        <ul>
          <li>
            <img src="../../../assets/guanzhu/ch.jpg" alt />
          </li>
          <li>
            <img src="../../../assets/guanzhu/ch.jpg" alt />
          </li>
        </ul>
      </div>
      <!-- 加入部落 -->
      <div @click="tianjia(0)" v-show="istianjia[0].show" class="tianjia">
        <span>+ 加入部落</span>
      </div>
      <!-- 点击后变成已加入 -->
       <div @click="tianjia(1)" v-show="istianjia[1].show" class="tianjia_b">
        <span>已加入</span>
      </div>
     
    </div>  
    <!-- 头背景图片 -->
    <div class="img">
      <img src="../../../assets/guanzhu/ch.jpg" width="100%" height="315px" />
    </div>
     <!-- 制定活动 -->
    <div class="zhiding">
      <span class="zd_left">置顶</span>
      <span class="zd_right">VIP福利社 | 每周翻牌：50份！壹点壹客9周年蛋糕兑换卡，叠加PASS卡大礼包！</span>
    </div>
    <!-- 空 -->
    <div class="kong"></div>


    <!-- 评论 -->
    <mt-navbar class="xintie" v-model="isxintie">
      <mt-tab-item id="lm" @click.native="isxuan(0)">
        <a :class="xuan[0].show==true?'hover':''">最后回复</a>
      </mt-tab-item>
      <mt-tab-item id="xt" @click.native="isxuan(1)">
        <a :class="xuan[1].show==true?'hover':''">最新发表</a>
      </mt-tab-item>
    </mt-navbar>
    <mt-tab-container class="xintie_nei" v-model="isxintie">
      <mt-tab-container-item id="lm">
        <!-- 热门 -->
        <div class="lemen">
          <!-- 个人中心标题 -->
          <div class="geren">
            <div class="geren_left">
              <img class="tou" src="../../../assets/pinglun/kf.jpg" alt="">
              <img class="tou2" src="../../../../public/myself/enq.png" alt="">
            </div>
            <div>
              <span class="content1">Ca糖豆n豆儿dy</span>
              <span class="content2">6月23日</span>
            </div>
            <span class="pilun">
              <img class="pilun2" src="../../../../public/myself/ffd.png" alt="">
              <span class="pilun1">Lv8</span>
            </span>
            
          </div>
          <!-- 评论内容 -->
          <div class="conter">
            <div class="conter_left">
              <div class="conter_top">
                <span class="span1">精华</span>
                <span class="span2">我是那半勺饭的幸运儿---人均888深V红人堂老乾杯品鉴会</span>
              </div>
              <div class="conter_conter">说点废话。大家猴， 我是潜匿点评儿，糖豆年没有发过跟吃有关的帖子希望这不是今年唯一一篇与美食相关的帖子，哈。 </div>
              <div class="conter_botom">浏览：917</div>
            </div>
            <div>
              <img src="../../../assets/pinglun/sj.jpg" alt />
            </div>
          </div>
          <!-- 点赞处 -->
          <div class="dz">
            <div class="dz_left">
              <div @click="show(1)" v-show="isshow[0].alive==1">
                <img src="../../../assets/dz.jpg" alt />
              </div>
              <div @click="show(0)" v-show="isshow[1].alive==1">
                <img src="../../../assets/dz2.jpg" alt />
              </div>
              <span>{{p}}</span>
              <div class="right_left">
                <img class="stree" src="../../../assets/guanzhu/ms.jpg" alt />
                <img class="tow" src="../../../assets/guanzhu/xc.jpg" alt />
                <img class="one" src="../../../assets/guanzhu/mz.jpg" alt />
              </div>
            </div>
            <div class="dz_right">
              <img src="../../../assets/pl.jpg" alt />
              <span>27</span>
              <img src="../../../assets/zf.jpg" alt />
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
            <li>
              <span class="pl3">查看全部52条评论</span>
            </li>
          </ul>
        </div>
        <div class="kong"></div>
      </mt-tab-container-item>
      <mt-tab-container-item id="xt">
        <!-- 我的部落新帖 -->
        <!-- 点击后需要判断用户是否登录 -->
        <div class="lemen">
          <!-- 个人中心标题 -->
          
          <!-- 评论内容 -->
          <div class="conter">
            <div class="conter_left">
              <div class="conter_top">
                <!-- <span class="span1">精华</span> -->
                <span class="span2">澳门魔幻一日游 | WHY SO SERIOUS</span>
              </div>
              <div class="conter_conter">来着用户:梦</div>
              <div class="conter_botom">浏览：5</div>
            </div>
            <div>
              <img src="../../../assets/guanzhu/am.jpg" alt />
            </div>
          </div>
          <!-- 点赞处 -->
          <div class="dz">
            <div class="dz_left">
              <!-- 未点击显示 -->
              <div @click="show(1)" v-show="isshow[0].alive==1">
                <img src="../../../assets/dz.jpg" alt />
              </div>
              <span v-show="isshow[0].alive==1">快来抢首赞</span>
              <!-- 点击后显示 -->
              <div @click="show(0)" v-show="isshow[1].alive==1">
                <img src="../../../assets/dz2.jpg" alt />
              </div>
              <span v-show="isshow[1].alive==1">1</span>
              <div class="right_left" v-show="isshow[1].alive==1">
                <img class="stree" src="../../../assets/guanzhu/ms.jpg" alt />
              </div>
            </div>
            <div class="dz_right">
              <img src="../../../assets/pl.jpg" alt />
              <img src="../../../assets/zf.jpg" alt />
            </div>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>


  </div>
</template>
<script>
export default {
  data() {
    return {    
      // 头部区
      home: "深圳吃喝玩乐",
      sum: 10,
      istianjia:[
        {show:1},
        {show:0},
      ],
      searchBar:0,
      // 评论区
      p: 100,
      isxintie: "lm",
      xuan: [{ show: true }, { show: false }],
      isshow: [{ alive: 1 }, { alive: 0 }],
    };
  },
  methods: {
    // 头部区
    tianjia(n){
      if(n==0){
        // console.log("加入部落")
        this.istianjia[0].show=0;
        this.istianjia[1].show=1;
        this.$toast("成功加入")       //需要在部落表中添加数据
      }
      else{
        // console.log("退出部落")
        this.istianjia[0].show=1;
        this.istianjia[1].show=0;
        this.$messagebox.confirm("是否退出部落").then(
          res=>{},  //需要发请求在部落表中删除数据
          this.istianjia[0].show=1, 
          this.istianjia[1].show=0,
        ).catch(err=>{
          this.istianjia[1].show=1,
          this.istianjia[0].show=0
        })
      }
    },
    isxuan(n) {
      for (var i = 0; i < this.xuan.length; i++) {
        if (n == i) {
          this.xuan[i].show = true;
        } else {
          this.xuan[i].show = false;
        }
      }
    },
    // 控制点赞显示隐藏
    show(n) {
      if (n % 2 == 0) {
        this.p = this.p - 1;
      } else {
        this.p = this.p + 1;
      }
      for (var i = 0; i < this.isshow.length; i++) {
        if (n == i) {
          this.isshow[i].alive = 1;
          this.p += 1;
        } else {
          this.isshow[i].alive = 0;
          this.p -= 1;
        }
      }
    },
    // 添加滚动方法
    handleScroll(){
      var scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
      var header=document.getElementsByClassName("home");
      // console.log(header)
      if(scrollTop>20){
        this.searchBar=1;
        // header.style.opacity="1";
      }else{
        this.searchBar=0;
        // header.style.opacity="0";
      }
    }
  },
  mounted() {
    //监听滚动事件
    window.addEventListener('scroll',this.handleScroll)
  },
};
</script>
<style lang="scss" scoped>
.home {
  background:#fff;
  display: flex;
  justify-content: space-between;
  height: 40px;
  // ------------
  position:fixed;
  top:0;
  width: 100%;
  background:rgba(255,255,255,1);
  transition: opacity 0.5s linear;
  // z-index:-1;
  
  img {
    width: 40px;
  }
  .text {
    display: inherit;
    margin-top: 10px;
  }
}
.kong{
  height:10px;
  background: #f5f5f5;
}
.jieshao {
  //页面介绍
  background: rgba(0, 0, 0, 0.5);
  // 转发
  .zhuang {
    padding-top: 10px;
    display: flex;
    margin: 0 15px;
    justify-content: space-between;
    img {
      border-radius: 50%;
      width: 25px;
    }
  }
  // 介绍头
  .jieshao_header {
    display: flex;
    img {
      width: 110px;
      height: 110px;
      border-radius: 10px;
      margin: 10px 15px 0px 15px;
    }
  }
  .jieshao_right {
    margin-top: 10px;
    margin-right: 10px;
    color: #eee;
    .rig_one {
      font-size: 18px;
    }
    .rig_two {
      font-size: 12px;
      margin: 10px 0;
    }
    .rig_there {
      height: 40px;
      // width: 100px;
      font-size: 13px;
      overflow: hidden;
      line-height: 19px;
      // 超出行数...
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
  }
  // 用户成员头像
  .add {
    margin: 10px 15px 10px 15px;
    background: rgba(120, 120, 120, 0.5);
    padding: 5px 15px 0 15px;
    border-radius: 10px;
    span {
      color: #ddd;
      font-size: 15px;
    }
    ul {
      display: flex;
      li {
        margin: 10px 5px 10px 0;
        img {
          width: 20px;
          border-radius: 50%;
          border: 1px solid #bbb;
        }
      }
    }
  }
  // 添加
  .tianjia ,.tianjia_b{
    display: flex;
    justify-content: center;
    span {
      margin: 5px 0 15px 0;
      background: #eee;
      width: 200px;
      height: 45px;
      display: inline;
      text-align: center;
      line-height: 45px;
      border-radius: 30px;
      color: #fd4800;
    }
  }
  .tianjia_b{
    span{color:#bbb};
  }
}
.img { 
  width: 100%;
  height: 315px;
  position: absolute;
  top: 0px;
  z-index: -1;
  filter: blur(2px);
}
.img2{
  margin-top: 40px;
}
// 置顶活动
.zhiding{
  margin: 15px;
  .zd_left{
    background: #fd4800;
    color:#eee;
    font-size: 12px;
    padding: 1px 4px 1px 4px;
    margin-right: 5px;
  }
  .zd_right{
    font-size: 15px;
  }
}

// 评论
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
  // 个人中心
  .geren{
    display: flex;
    .geren_left{
      position: relative;
      .tou{
        width: 45px;height: 45px;
        border-radius: 50%;
      }
      .tou2{
        width: 18px;
        position: absolute;
        top:26px; right:-1px;
        border:1px solid #fff;
        border-radius: 50%;
      }
    }
    span{
      margin:0px 10px;
      display:block;
    }
    .content1{
      color: #05989c;
    }
    .content2{
      font-size: 12px;
      color: #aaa;
    }
    .pilun{
      position: relative;
       .pilun2{
        width: 25px;
        position: absolute;
        left: -1px;top:-3px;
      }
    .pilun1{
      font-size: 15px;
      font-weight: bold;
      display: inline;
      background: #000;
      color:#ffe4bb;
      line-height: 20px;
      height: 20px;
      padding:0 10px;
      border-radius: 10px  
    }
    }
   
  }
  // 评论主内容
  .conter {
    display: flex;
    justify-content: space-between;
    // margin-top: 10px;
    .conter_left {
      color: #000;
      margin-top: 10px;
      .conter_top {
        .span1 {
          display: inline;
          padding: 3px;
          border-radius: 3px;
          text-align: center;
          color: #b79561;
          font-size: 14px;
          line-height: 22px;
          background-image: linear-gradient(
            to right,
            rgb(42, 1, 1),
            rgb(10, 10, 6)
          );
        }
        .span2 {
          font-weight: bold;
        }
      }
      .conter_conter,
      .conter_botom {
        margin: 5px 0 10px 0;
        font-size: 12px;
        color: #333;
      }
      .conter_conter{
      height: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      }
    }
    img {
      width: 100px;
      height: 100px;
      border-radius: 5px;
      margin-left: 10px;
    }
  }
  // 点赞处
  .dz {
    display: flex;
    justify-content: space-between;
    .dz_left {
      display: flex;
      img {
        width: 28px;
      }
      span {
        margin-left: 5px;
        margin-top: 7px;
      }
      .right_left {
        position: relative;
        margin-left: 10px;
        img {
          border-radius: 50%;
          width: 25px;
          border-radius: 50%;
          border: 1px solid #fff;
          position: absolute;
        }
        .one {
          left: 30px;
        }
        .tow {
          left: 15px;
        }
      }
    }
    .dz_right {
      display: flex;
      img {
        width: 28px;
      }
      span {
        margin-top: 8px;
        margin-right: 10px;
      }
    }
  }
  // 评论详情
  .plx {
    list-style: none;
    margin: 15px 0px 15px 0px;
    li {
      .pl1,
      .pl2 {
        font-size: 15px;
      }
      .pl1 {
        color: #05989c;
      }
      .pl3 {
        display: block;
        font-size: 14px;
        margin-top: 5px;
        color: #666;
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