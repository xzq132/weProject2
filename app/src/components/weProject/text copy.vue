<template>
  <div :style="{height:height*lineNum + 'px'}" class="rollScreen_container" id ="rollScreen_container">
    <ul class="rollScreen_list" :style = {transform:transform} :class="{rollScreen_list_unanim:num===0}">
      <li class="rollScreen_once" v-for="(item,index) in contentArr" :key="index" :style="{height:height+'px'}">
        <span>{{item}}</span>
      </li>
      <li class="rollScreen_once" v-for="(item,index) in contentArr" :key="index+contentArr.length" :style="{height:height+'px'}">
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  props: {
    height: {
      default: 40,
      type: Number
    },
    lineNum: {
      default: 1,
      type: Number
    }
  },
  data: function () {
    return {
      contentArr: ['内容1', '内容2'],
      num: 0
    }
  },
  computed: {
    transform: function () {
      return 'translateY(-' + this.num * this.height + 'px)'
    }
  },
  created: function () {
    let _this = this
    setInterval(function () {
      if (_this.num !== _this.contentArr.length) {
        _this.num++
      } else {
        _this.num = 0
      }
    }, 2000)
  }
}
</script>
 
<style lang="scss" scoped>
  .rollScreen_container{
    display: inline-block;
    position:relative;
    overflow: hidden;
  }
  .rollScreen_list{
    transition: 1s linear;
  }
  .rollScreen_list_unanim{
    transition: none
  }
</style>
