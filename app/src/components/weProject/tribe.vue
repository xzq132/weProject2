<template>
  <div>
    <!-- 返回头部 -->
    <mt-header fixed title="兴趣部落">
      <router-link to="/shequheader" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 侧边导航栏 -->
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
    </van-sidebar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeKey:0
    }
  },
}
</script>
<style lang="scss" scoped>
//返回头样式
/deep/.mint-header-title,/deep/.mintui{
  color: #000;
  font-size: 17px;
}
/deep/.mintui{
  font-size: 20px;
}
/deep/.mint-header {
  background: #fff;  
}
/deep/.mint-header.is-fixed {
border-bottom: 1px solid #eee;
}
</style>