<template>
    <div>
       
       <div class="header"> <img src="../../../public/img/1bg.png" alt="" id="bg">
       </div>
       <div class="bar">
           <a href="#">深圳</a>
           <input type="text" placeholder="搜索时下美食..." id="sou">
           <a href="#">写攻略</a>
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    *{margin:0;padding:0;}
    #bg{width:100%;}
    .bar{
        width:100%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        background-color:#eee;
        position:absolute;
        top:133px;

        #sou{
       padding:10px;
        height:22px;
        width:200px;
        border-radius:25px;
        font-size:20px;
        background: #ddd;
        outline: 0;
        border:none;
        
        }

    }
    
</style>
