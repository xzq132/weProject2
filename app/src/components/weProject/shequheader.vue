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
        <img src alt />
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
<style lang="scss" scoped>
.header {
  // 头部样式
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  // 左边图标
  .img_left {
    img {
      height: 30px;
    }
  }
  // 中间切换栏
  .neron {
    width: 200px; //宽
    .nneron_center {
      display: flex; //弹性布局
      justify-content: space-between;
    }
  }
}
//字体大小
div .mint-tab-item-label .mint-tab-item-label {
  font-size: 20px;
}
</style>