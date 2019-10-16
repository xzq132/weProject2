<template>
  <div>
    <div class="header">
      <!-- 左侧图标 -->
      <div class="img_left">
        <img src="../../assets/ceh.png" alt />
      </div>
      <!-- 中间选项模块 -->
      <div class="neron">
        <mt-navbar class="neron_center" v-model="selected">
          <mt-tab-item id="1">关注</mt-tab-item>
          <mt-tab-item id="2">消息</mt-tab-item>
          <mt-tab-item id="3">社区</mt-tab-item>
        </mt-navbar>
      </div>
      <!-- 右侧图标 -->
      <div class="img_right">
        <img src="../../assets/ge.png" alt />
      </div>
    </div>
    <!-- 下方切换的模块 -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">关注模块</mt-tab-container-item>
      <mt-tab-container-item id="2">消息模块</mt-tab-container-item>
      <mt-tab-container-item id="3">社区模块</mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: 1
    };
  }
};
</script>
<style lang="scss" >
.header {
  // 头部样式
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
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
        padding:0;
        //字体大小
        .mint-tab-item-label{
          font-size: 16px;
          color: #666;
        }    
      }
      // 点击后样式
      .is-selected{
        display: block;
        width: 50px;
        border-bottom:3px solid #ff0;
        border-image: -webkit-linear-gradient(rgba(255, 30, 0, 0.993), rgb(238, 126, 34)) 20 20;
        width:100%;
        .mint-tab-item-label{
          font-size: 18px;
          color: #000;
        } 
      }
    }
  }
}

</style>