<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        <img src="../../assets/ic_weixin_normal.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img src="../../assets/ic_weixin_normal.png">
        攻略
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img src="../../assets/ic_weixin_normal.png">
        关注
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img src="../../assets/ic_weixin_normal.png">
        我
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return {
      selected:"tab1"
    }
  }
}
</script>
<style lang="scss" scoped>

</style>