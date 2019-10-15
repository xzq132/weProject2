<template>
  <div>
    <img :src="focused?selectedImage:normalImage" alt="" class="isStyle">
  </div>
</template>
<script>
export default {
  props:{
    focused:false,
    selectedImage:{default:""},
    normalImage:{default:""}
  }
}
</script>
<style lang="scss" scoped>
  .isStyle{
    width:30px;
    height:30px;
  }
</style>