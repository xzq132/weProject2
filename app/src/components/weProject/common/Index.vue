<template>
  <main class="index">
    <div class="top">
      <a href="javascript:;" class="city">
        <span>深圳</span>
        <i class="icon"></i>
      </a>
      <label><input type="text" placeholder="输入商户名、地点或者菜名"></label>
      <div class="map-icon"></div>
    </div>
    <div class="f1">
      <div class="hot-title" :class="selLi==true?'active':''">
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/meishi.png">
            </div>
            <p>美食</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/maoyanicon4.png">
            </div>
            <p>电影/演出</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/jiudian01.png">
            </div>
            <p>酒店/门票</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/play.png">
            </div>
            <p>休闲娱乐</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/waimai.png">
            </div>
            <p>美团外卖</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/qinzileyuannew.png">
            </div>
            <p>亲子/乐园</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/liren.png">
            </div>
            <p>丽人/美发</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/jiudian01.png">
            </div>
            <p>医院美容</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/yundong.png">
            </div>
            <p>健康/运动</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/jiehun.png">
            </div>
            <p>结婚/摄影</p>
          </div>
        </a>
      </div>
      <div class="hot-title"  :class="selLi==false?'active':''">
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/xuexipeixun.png">
            </div>
            <p>学习培训</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/KTV.png">
            </div>
            <p>KTV</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/jiudian01.png">
            </div>
            <p>酒店/门票</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/play.png">
            </div>
            <p>休闲娱乐</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/waimai.png">
            </div>
            <p>美团外卖</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/qinzileyuannew.png">
            </div>
            <p>亲子/乐园</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/liren.png">
            </div>
            <p>丽人/美发</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/jiudian01.png">
            </div>
            <p>医院美容</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/yundong.png">
            </div>
            <p>健康/运动</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/jiehun.png">
            </div>
            <p>结婚/摄影</p>
          </div>
        </a>
         <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/xuexipeixun.png">
            </div>
            <p>学习培训</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/KTV.png">
            </div>
            <p>KTV</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/jiudian01.png">
            </div>
            <p>酒店/门票</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/play.png">
            </div>
            <p>休闲娱乐</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/waimai.png">
            </div>
            <p>美团外卖</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/qinzileyuannew.png">
            </div>
            <p>亲子/乐园</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/liren.png">
            </div>
            <p>丽人/美发</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/jiudian01.png">
            </div>
            <p>医院美容</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/yundong.png">
            </div>
            <p>健康/运动</p>
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <div>
              <img src="../../../../public/index/jiehun.png">
            </div>
            <p>结婚/摄影</p>
          </div>
        </a>
      </div>
      <ul @click="handle">
        <li :class="selLi==true?'active':''"  :data-i=0></li>
        <li :class="selLi==false?'active':''" :data-i=1></li>
      </ul>
    </div>
    <div class="f2">
      <div class="item">
        <h4>必逛商圈</h4>
        <h6>热门打卡</h6>
      </div>
      <div class="item">
        <h4>周四必抢</h4>
        <h6>限时特惠</h6>
      </div>
      <div class="item">
        <h4>必系列</h4>
        <h6>全城必去</h6>
      </div>
      <div class="item">
        <h4>霸王餐</h4>
        <h6>品质优选</h6>
      </div>
      <div class="item">
        <h4>VIP特权</h4>
        <h6>5折套餐</h6>
      </div>
    </div>
    <div class="list-nav">
      <ul @click="handle1" >
        <!-- :class="selNav==true?'active':''" -->
        <li  :class="selNav==i?'active':''"
         v-for="(item, i) of list" :key="i" :data-i="i" v-cloak>{{item}}</li>
      <!-- <li>视频</li>
        <li>菜谱</li>
        <li>电影</li>
        <li>美食</li>
        <li>爱美</li>
        <li>玩乐</li>
        <li>旅行</li>
        <li>结婚</li>
        <li>购物</li>
        <li>教培</li>
        <li>家装</li>
        <li>运动健身</li>
        <li>宠物</li>
        <li>遛娃</li>
        <li>健康生活</li>-->
      </ul> 
    </div>
  </main>
</template>
<script>
export default {
  data(){return{
    selLi:true,
    selNav:0,
    list:["推荐","视频","菜谱","电影","美食","爱美","玩乐","旅行","结婚","购物","教培","家装","运动健身","宠物","遛娃","健康生活"]
  }},
  methods:{
    handle(e){
      if(e.target.nodeName=="LI"){
        var i =e.target.dataset.i;
        if(i==0){
          this.selLi = true;
        }else{
          this.selLi = false;
        }
      }
    },
    handle1(e){
      if(e.target.nodeName=="LI"){
        var i = e.target.dataset.i;
        this.selNav = i;
      }
    }
  }
}
</script>
<style>
[v-cloak]{ display:none } 
.index .top{
  display: flex;
  position: fixed;
  z-index:999;
  width:100%;
  flex-flow: row nowrap;
  height: 48px;
  margin:0;
  justify-content:space-around;
  line-height: 48px;
  background-color:#fff;
}
  .index .top .city{
    display: flex;
    text-decoration: none;
  }
  .index .top .city span{
    font-size:16px;
    color:#000;
    white-space: nowrap;
  }
  .index .top .city i.icon{
    width: 16px;
    background: url("../../../../public/index/jiantou.jpg") no-repeat 0px 16px;
    background-size:15px 15px;
  }
  .index .top input{
    width:200px;
    border-radius: 20px;
    padding: 5px;
    padding-left:45px;
    border:1px solid #ccc;
    background: url("../../../../public/index/search.jpg")
    no-repeat 25px -1px;
    background-size:30px 30px;
    outline: none;
  }
  .index .top .map-icon{
    width: 30px;
    background: url("../../../../public/index/gc1.png") no-repeat 0px 10px;
    background-size: 30px 30px;
  }

.index .f1 {
  padding-top:50px;
  }
  .index .f1 .hot-title{
    display: none;
  }
  .index .f1 .hot-title.active{
    display: flex;
    width: 100%;
    flex-flow:row wrap;
    justify-content:space-around;
    align-items: center;
  }
  .index .f1 a{
    text-decoration: none;
    color:#000;
    text-align: center;
  }
  .index .f1 img{
    width:60px;height: 60px;
  }
  .index .f1 ul{
    display: flex;
    flex-flow:row nowrap;
    justify-content: center;
    color:#ccc;
    padding:10px 0;
  }
  .index .f1 ul li{
    width: 10px;height:10px;
    border-radius: 50%;
    background-color:#ccc;
    margin-left:10px;
    list-style:none;
  }
  .index .f1 ul li.active{
    background-color:#f63;
  }
.index .f2{
  display: flex;
  flex-flow:row nowrap;
  justify-content: space-around;
}
  .index .f2 .item{
    height: 65px;width:65px;
    border:1px solid #ccc;
    text-align: center;
    padding: 2px;
    padding-top:5px;
    /* margin-left:5px; */
  }
  .index .f2 .item h6{
    font-weight: lighter;
    font-size:13px;
  }
.index .list-nav{
  margin:10px;
}
  .index .list-nav ul{
    display: flex;
    width: 100%;
    height: 21px;
    overflow: hidden;
    list-style: none;
  }
  .index .list-nav ul li.active{
    font-size:18px;
    font-weight: bolder;
    border-bottom: 4.5px solid #f63;
  }
  .index .list-nav ul li{
    display: flex;
    white-space: nowrap;
    margin-right:20px;
  }
</style>