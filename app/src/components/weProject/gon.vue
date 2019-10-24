<template>
    <div id="fa">
        <div class="mubu"></div>
       <div class="header"> <img src="../../../public/img/1bg.png" alt="" id="bg">
       </div>
       <div class="bar">
           <a href="#" >{{didian}}</a>
           <input type="text" placeholder="搜索时下美食..." id="sou">
           <a href="#">写攻略</a>
       </div>
       
        <div class="content1">
            <div>
                <a href="#" @click="all"><img src="../../../public/img/pic_5.png" alt="" class="pic_5"></a>
                <a href="#" @click="all"><img src="../../../public/img/pic_6.png" alt="" class="pic_6"></a>
            </div>
            <div>
                <a href="#" @click="all"><img src="../../../public/img/pic_7.png" alt="" class="pic"></a>
                <a href="#" @click="all"><img src="../../../public/img/pic_8.png" alt="" class="pic"></a>
                <a href="#" @click="all"><img src="../../../public/img/pic_9.png" alt="" class="pic"></a>
            </div>
         </div>
         <gonchild1></gonchild1>
         <gonchild2></gonchild2>
         
    </div>
</template>
<script>
import gonChild1 from "./gonChild1.vue"
import gonChild2 from "./gonChild2.vue"

export default {
    data(){return{didian:"深圳"}},
    components:{"gonchild1":gonChild1,"gonchild2":gonChild2},

     
          mounted() {
        
            window.addEventListener('scroll', this.scrollHandle,true);  // 绑定页面的滚动事件
          },
          methods: {
              all(){this.$router.push("GonChild3")},
              scrollHandle: function() {
            var mubu=document.getElementsByClassName("mubu")[0];
            var scroll=document.documentElement.scrollTop || document.body.scrollTop;
            if(scroll>20){ mubu.style.opacity="1";}
            else{mubu.style.opacity="0";}
           
           // console.log(111);
          
        },
   
          },
}
</script>


<style lang="scss" scoped>
    *{margin:0;padding:0;}
    #fa{background-color:#eee;}
    #bg{width:100%;height:50px;}
    .mubu{
        background-color:#fff;position:fixed;
        height:95px;z-index: 10;width:100%;
        opacity:0;
        transition: opacity 0.5s linear;

        }
    .bar{
        width:100%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        background-color:#eee;
        position:absolute;
        top:50px;
        position:fixed;
        z-index:11;
        padding:7px;

        #sou{
       padding:10px;
        height:13px;
        width:200px;
        border-radius:25px;
        font-size:17px;
        background: #ddd;
        outline: 0;
        border:none;
        }

    }
    .content1{
       background:#fff;
        border-top-left-radius: 30px;
        border-top-right-radius:30px;
        padding:10px;margin-top:49px;
        
        }
        .pic_5{width:66%;border-top-left-radius: 20px;height:142px;
        
        }
        .pic_6{width:33%;border-top-right-radius:20px;height:142px;
        
        }
        .pic{width:33%;height:117px;}
</style>
