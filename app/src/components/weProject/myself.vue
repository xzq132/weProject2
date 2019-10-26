<template>
  <div>
    <login :style="isLogin?'display:block':'display:none'"></login>
    <myselfheader :style="isLogin?'display:none':'display:block'"></myselfheader>
  </div>
</template>
<script>
import myselfLogin from './myselfLogin.vue'
import myselfHeader from './myselfHeader.vue'
export default {
  data(){
    return {
      isLogin:false
    }
  },
  components:{
    "login":myselfLogin,
    "myselfheader":myselfHeader
  },
  methods: {
  },
}
</script>
<style lang="scss">

</style>