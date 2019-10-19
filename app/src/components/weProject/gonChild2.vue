<template>
<div>
    <!--食客攻略模块start-->
    <div id="child2">
       <div class="div1">
           <div>
               <a href="#">
                   <span class="span1">食客攻略</span>
               <span class="span2">全部74篇</span>
               </a>
           </div>
           <a href="#">
               <img src="../../../public/img/jt.png" alt="" class="img1">
            </a>
       </div>
        <!--移动端滑动效果-->
       
       <ul>
           <li>烤肉不能停</li>
            <li>网红店</li>
            <li>自助大胃王</li>
            <li>海鲜情报站</li>
            <li>小资咖啡店</li>
            <li>面包甜点</li>
            <li>夜宵撸串</li>
        </ul> 
    
    <!-- 第一个-->
    <div class="div2">
        <div class="div2_1">
            <p class="p1">火爆明洞13年！国内仅8家！宋仲基，陈小春等明星皆打卡...</p>
            <div class="div2_11">
                <span class="span11">地点：{{span1_1}}</span>
            <span class="span22">浏览：{{span1_2}}</span>
            <span class="span33">赞：{{span1_3}}</span>
            </div>
        </div>
        <img src="../../../public/img/pic3.png" alt="" class="img2">
    </div>
<!-- 第二个-->
    <div class="div2">
        <div class="div2_2">
            <p class="p1">俏儿，小馆子里的好味道--隆焰烤肉刷肉</p>
            <div class="div2_11">
                <span class="span11">地点：{{span1_11}}</span>
            <span class="span22">浏览：{{span1_22}}</span>
            <span class="span33">赞：{{span1_33}}</span>
            </div>
        </div>
        <img src="../../../public/img/pic4.png" alt="" class="img2">
    </div>
      <!--加载更多-->
      <div class="jiazha">
          <a href="#">查看更多攻略</a>
          <img src="../../../public/img/jt.png" alt="">
      </div>  
        </div>
        <!--食客攻略模块end-->

        <!--美好家居研究所模块start-->
        <div id="child2">
       <div class="div1">
           <div>
               <a href="#">
                   <span class="span1">美好家居研究所</span>
               <span class="span2">全部815篇</span>
               </a>
           </div>
           <a href="#">
               <img src="../../../public/img/jt.png" alt="" class="img1">
            </a>
       </div>
        <!--移动端滑动效果-->
       
       <ul>
           <li>家居设计所</li>
            <li>好物清单</li>
            <li>爆改小户型</li>
            <li>超强收纳</li>
            <li>低成本改造</li>
            <li>老房逆袭</li>
            <li>少女心好物</li>
        </ul> 
    
    <!-- 第一个-->
    <div class="div2">
        <div class="div2_1">
            <p class="p1">复古美式正流行，只有0.5m<sup>2</sup>也能做梳妆台</p>
            <div class="div2_11">
                <span class="span11">公司：{{span2_1}}</span>
            <span class="span22">浏览：{{span2_2}}</span>
            <span class="span33">赞：{{span2_3}}</span>
            </div>
        </div>
        <img src="../../../public/img/pic1.png" alt="" class="img2">
    </div>
<!-- 第二个-->
    <div class="div2">
        <div class="div2_2">
            <p class="p1">老房翻新改造，洗手台外放，阳台改成衣帽间，90m<sup>2</sup></p>
            <div class="div2_11">
                <span class="span11">公司：{{span2_11}}</span>
            <span class="span22">浏览：{{span2_22}}</span>
            <span class="span33">赞：{{span2_33}}</span>
            </div>
        </div>
        <img src="../../../public/img/pic2.png" alt="" class="img2">
    </div>
      <!--加载更多-->
      <div class="jiazha">
          <a href="#">查看更多攻略</a>
          <img src="../../../public/img/jt.png" alt="">
      </div>  
        </div>
        <!--美好家居研究所模块end-->

    </div>
</template>
<script>
    export default {
       data(){return{
           span1_1:"杭州",span1_2:4287,span1_3:112,
           span1_11:"北京",span1_22:8936,span1_33:505,

           span2_1:"博若森装饰",span2_2:936,span2_3:42,
           span2_11:"博若森装饰",span2_22:1826,span2_33:54

       }}
    }
</script>
<style lang="scss" scoped>
.jiazha{padding:8px;}
.jiazha img{margin-left:8px;}
.p1{font-size:16px;color:#fff;text-align: justify;}

.span11,.span22,.span33{font-size:7px;color:#fff}
.div2{padding:10px;}
.img2{width:30%}
.div2{display:flex;}
.div2_11{display:flex;justify-content: space-around;margin-top:25px;}
.div2_1,.div2_2{
    background-color:#13070748;width:70%;padding:9px;
    display:flex;flex-direction: column;border-top-left-radius:9px;
    border-bottom-left-radius: 9px;
}
.div2_2{background-color:rgb(116, 95, 129)}
#child2{margin-top:20px;background: #fff;}
.span1{font-size:26px;margin-left:10px;}
.span2{margin-left:7px;}
.img1{margin-right:10px;}
.div1{display:flex;justify-content:space-between;}
a{text-decoration: none;}
ul{
    margin-top:20px;
    display:flex;list-style-type:none;justify-content:space-around;
    
    }
li{background-color:#eee;padding:7px;border-radius:25px;}

    
</style>