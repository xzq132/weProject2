<template>
<div>
  <mt-navbar class="xintie" v-model="isxintie">
     <mt-tab-item id="lm">热门</mt-tab-item>
    <mt-tab-item id="xt">我的部落新帖</mt-tab-item>
  </mt-navbar>
  <mt-tab-container class=xintie_nei v-model="isxintie">
    <mt-tab-container-item  id="lm">热门</mt-tab-container-item>
    <mt-tab-container-item id="xt">我的部落新帖</mt-tab-container-item>
  </mt-tab-container>
</div> 
</template>
<script>
export default {
  data() {
    return {
      isxintie:"lm"
    }
  },
  methods: {
    
  },
}
</script>
<style lang="scss" scoped>

    .mint-tab-item-label {
      font-size: 16px;
      font-weight: bold;
      color: #000;
    }
  
</style>