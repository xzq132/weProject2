<template>
  <div>
    <div class="header">
      <!-- 左侧图标 -->
      <div class="img_left">
        <img src="../../assets/g5r.png" alt />
      </div>
      <!-- 中间选项模块 -->
      <div class="neron">
        <mt-navbar class="neron_center" v-model="selected">
          <mt-tab-item id="gz" @click.native="showl(0)"  :class="vshow[0].show==true?'is-selected':''"  >关注</mt-tab-item>
          <mt-tab-item id="xiaoxi" @click.native="showl(1)" >消息</mt-tab-item>
          <mt-tab-item id="sq" @click.native="showl(2)"  >社区</mt-tab-item>
        </mt-navbar> 
      </div>
      <!-- 右侧图标 -->
      <div class="img_right">
        <img src="../../assets/ge.png" alt />
      </div>
    </div>
    <!-- 下方切换的模块 -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item  id="gz">
        <guanzhu></guanzhu>
      </mt-tab-container-item>
      <mt-tab-container-item  id="xiaoxi">消息模块</mt-tab-container-item>
      <mt-tab-container-item  id="sq">
        <shequ></shequ>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import guanzhu from './guanzhu.vue'
export default {
  components:{
    'guanzhu':guanzhu
  },
  data() {
    return {
     selected:"gz",
     vshow:[
       {show:true},
       {show:false},
       {show:false}
     ],
    }
  },
  methods:{
    showl(n){
      for(var i=0;i<this.vshow.length;i++){
        if(n==i){
          this.vshow[i].show=true; 
        }else{
          this.vshow[i].show=false;
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  // 头部样式
  margin:15px 10px 0px 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom:8px;
  // 左右边图标
  .img_left,.img_right {
    img {
      height: 30px;
    }
  }
  // 中间切换栏
  .neron {
    width: 200px; //宽
    .neron_center {
      display: flex; //弹性布局
      justify-content: space-between;
      .mint-tab-item{
        margin-top:5px;
        padding: 0;
        //字体大小
/deep/.mint-tab-item-label{
          font-size: 18px;
          color: #666;   
        }    
      }
      // 点击后样式
      // .is-selected{
      //   border-bottom:0px;
      // }
   /deep/   .is-selected{
        display: block;
        width: 50px;
        border-bottom:3px solid #ff0;
        border-image: -webkit-linear-gradient(rgba(255, 30, 0, 0.993), rgb(238, 126, 34)) 20 20;
        width:100%;
        .mint-tab-item-label{
          font-size: 20px;
          color: #000;
        } 
      }
    }
  }
}

</style>