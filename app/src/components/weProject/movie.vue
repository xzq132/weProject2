<template>
  <div>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="index">
        111
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        222
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        333
      </mt-tab-container-item>
      <mt-tab-container-item id="tab4">
        <myself></myself>  
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="index" @click.native="changeState(0)" :class="currentIndex[0].isSelect==true?'active':''">
        <tabbaricon
        :selectedImage="require('../../assets/g5r.png')"
        :normalImage="require('../../assets/g5q.png')"
        :focused="currentIndex[0].isSelect"
        ></tabbaricon>首页
      </mt-tab-item>
      <mt-tab-item id="tab2" @click.native="changeState(1)" :class="currentIndex[1].isSelect==true?'active':''">
        <tabbaricon
        :selectedImage="require('../../assets/g5l.png')"
        :normalImage="require('../../assets/g5k.png')"
        :focused="currentIndex[1].isSelect"
        ></tabbaricon>攻略
      </mt-tab-item>
      <mt-tab-item id="tab3" @click.native="changeState(2)" :class="currentIndex[2].isSelect==true?'active':''">
        <tabbaricon
        :selectedImage="require('../../assets/g5p.png')"
        :normalImage="require('../../assets/g5o.png')"
        :focused="currentIndex[2].isSelect"
        ></tabbaricon>关注
      </mt-tab-item>
      <mt-tab-item id="tab4" @click.native="changeState(3)" :class="currentIndex[3].isSelect==true?'active':''">
        <tabbaricon
        :selectedImage="require('../../assets/g5t.png')"
        :normalImage="require('../../assets/g5s.png')"
        :focused="currentIndex[3].isSelect"
        ></tabbaricon>我
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import Tabbaricon from './common/TabBarIcon.vue'
import myself from './myself'
export default {
  data(){
    return {
      selected:"index",
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false},
      ]
    }
  },
  methods: {
    changeState(n){
      for(var i=0;i<this.currentIndex.length;i++){
        if(n===i){
          this.currentIndex[i].isSelect=true;
        }else{
          this.currentIndex[i].isSelect=false;
        }
      }
    }
  },
  components:{
    "tabbaricon":Tabbaricon,
    "myself":myself
  }
}
</script>
<style lang="scss" scoped>
  .mint-tabbar{
    background:#fafafa;
  }
  .active{
  background-color:#fff !important;
  color:#ff9d00 !important;
  }
</style>