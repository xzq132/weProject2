<template>
    <div class="top1">
     <div class="top2">
         <a href="#" class="a1"><img src="../../../public/img/pic1_1.png" alt="">
         必吃榜
         </a>
         <a href="#" class="a1"><img src="../../../public/img/pic1_2.png" alt="">
         亲子必...
         </a>
         <a href="#" class="a1"><img src="../../../public/img/pic1_3.png" alt="">
         特色商圈
         </a>
         <a href="#" class="a1"><img src="../../../public/img/pic1_4.png" alt="">
         巡味记
         </a>
         <a href="#" class="a1"><img src="../../../public/img/pic1_5.png" alt="">
         点评周刊
         </a>
     </div>
     <div class="top3">
         <div class="v1">
             <a href="#" class="a2"><img src="../../../public/img/pic2_1.png" alt="">
                <p>
                    <span class="sp1">{{sp11}}</span>
                    <span class="sp2">更新{{sp21}}篇</span>
                 </p>
            </a>
             <a href="#" class="a2"><img src="../../../public/img/pic2_2.png" alt="">
                <p>
                    <span class="sp1">{{sp12}}</span>
                    <span class="sp2">更新{{sp22}}篇</span>
                 </p>
            </a>
             <a href="#" class="a2"><img src="../../../public/img/pic2_3.png" alt="">
                <p>
                    <span class="sp1">{{sp13}}</span>
                    <span class="sp2">更新{{sp23}}篇</span>
                 </p>
            </a>
         </div>
         <!--第二个div-->
         <div class="v1">
             <a href="#" class="a2"><img src="../../../public/img/pic2_4.png" alt="">
                <p>
                    <span class="sp1">{{sp_21}}</span>
                    <span class="sp2">更新{{sp_201}}篇</span>
                 </p>
            </a>
             <a href="#" class="a2"><img src="../../../public/img/pic2_5.png" alt="">
                <p>
                    <span class="sp1">{{sp_22}}</span>
                    <span class="sp2">更新{{sp_202}}篇</span>
                 </p>
            </a>
             <a href="#" class="a2"><img src="../../../public/img/pic2_6.png" alt="">
                <p>
                    <span class="sp1">{{sp_23}}</span>
                    <span class="sp2">更新{{sp_203}}篇</span>
                 </p>
            </a>
         </div>
         <!--第三个div-->
         <div class="v1">
             <a href="#" class="a2"><img src="../../../public/img/pic2_7.png" alt="">
                <p>
                    <span class="sp1">{{sp_31}}</span>
                    <span class="sp2">更新{{sp_301}}篇</span>
                 </p>
            </a>
             <a href="#" class="a2"><img src="../../../public/img/pic2_8.png" alt="">
                <p>
                    <span class="sp1">{{sp_32}}</span>
                    <span class="sp2">更新{{sp_302}}篇</span>
                 </p>
            </a>
             <a href="#" class="a2"><img src="../../../public/img/pic2_9.png" alt="">
                <p>
                    <span class="sp1">{{sp_33}}</span>
                    <span class="sp2">更新{{sp_303}}篇</span>
                 </p>
            </a>
         </div>
     </div>
    </div>
</template>
<script>
export default {
    data(){return{
        sp11:'结婚',sp12:'民宿',sp13:"变美",sp21:5,sp22:5,sp23:754,
        sp_21:'萌宠',sp_22:'兴趣',sp_23:'家居',sp_201:397,sp_202:403,sp_203:815,
        sp_31:'购物',sp_32:'品酒',sp_33:'菜谱',sp_301:197,sp_302:168,sp_303:1600
        
        }}
}
</script>
<style lang="scss" scoped>
.top1{
    margin-top:20px;
    background-color:#fff;
    }
.top2{display:flex;justify-content:space-around;}
.a1{
    display:flex;flex-direction: column;
    width:50px;
    font-size:12px;
}
.a2{display:flex;}
.a2 img{width:60px;}
.a2 p{display:flex;flex-direction: column;margin-top:10px;}
.a2 .sp1{font-size:20px;}
.a2 .sp2{font-size:12px;color:#888282;margin-top:7px;}
.v1{display:flex;justify-content:space-around;margin-top:15px;}
</style>