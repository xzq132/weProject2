<template>
  <div class="film">
    <div class="film-nav">
      <div><img src="../../../../public/index/dc3.png"></div>
      <div class="film-btn">
        <mt-button @click="change" data-id="tab1">电影</mt-button>
        <mt-button @click="change" data-id="tab2">商城</mt-button>
        <mt-button @click="change" data-id="tab3">演出</mt-button>
      </div>
      <div><img class="search" src="../../../../public/index/e5h.png"></div>
    </div>
    <mt-tab-container v-model="active" style="padding-top:60px">
      <mt-tab-container-item id="tab1">
        <!-- 轮播图 -->
        <mt-swipe :auto="4000" @change="handleChange">
          <mt-swipe-item>
            <img src="../../../../public/index/dy1.jpeg" style="height:100px;width:100%">
          </mt-swipe-item><mt-swipe-item>
            <img src="../../../../public/index/my2.jpg" style="height:100px;width:100%">
          </mt-swipe-item>
        </mt-swipe>
        <!-- 热门电影 -->
        <div class="film-hot">
          <div class="film-conent">
            <h3>热门影片</h3>
            <span>查看全部</span>
          </div>
          <div class="film-img">
            <div>
              <div>
                <img src="../../../../public/index/dt1.png" style="width:32px;height:20px;position:absolute;z-index:1" alt="">
                <img src="../../../../public/index/p2572160709.png"  style="width:80px;height:120px;">
              </div>
              <p>少年的你</p>
            </div>
             <div>
              <img src="../../../../public/index/p2572160709.png"  style="width:80px;height:120px;">
              <p>少年的你</p>
            </div>
             <div>
              <img src="../../../../public/index/p2572160709.png"  style="width:80px;height:120px;">
              <p>少年的你</p>
            </div>
             <div>
              <img src="../../../../public/index/p2572160709.png"  style="width:80px;height:120px;">
              <p>少年的你</p>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        <div >商城</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        <div >演出</div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:"tab1"
    }
  },
  methods:{
    change(e){
      var id=e.target.dataset.id;
      this.active=id;
    },
    handleChange(){}
  },
}
</script>
<style scoped>
  .film-nav{
    position: fixed;
    z-index:999;
    display: flex;
    flex-flow: row nowrap;
    background-color: #fff;
    padding:10px;
    }
  .film-nav img{
    width:30px;
    margin-top:3px;
  }
  .film-nav img.search{
    width:20px; height:20px;
    margin-top:5px; 
  }
  .film-btn{
    margin:0 40px;
  }
  .mint-button {
    border:1px solid #f63;
    border-radius: 0;
    color:#f63;
    background-color:#fff;
    height:28px;
    font-size:16px;
    padding:0 18px;
  }
  .mint-button:not(:last-child){
    border-right:0;
  }
  .mint-button:first-child{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .mint-button:last-child{
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .mint-swipe{
    height:100px;
    width: 100%;
  }
  .film-hot{
    margin-top:10px;
  }
  .film-hot .film-conent{
    display:flex;
    flex-flow:row nowrap;
    justify-content: space-between;
    padding:10px;
    
  }
  .film-hot .film-conent h3{
      font-weight: lighter;
  }
  .film-hot .film-conent span{
    width:80px;
    color:#aaa;
    font-weight: lighter;
    margin-right: 10px;
    background: url('../../../../public/index/cps.png') no-repeat 63px 4px;
    background-size: 15px 15px;
  }
  .film-hot .film-img{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    overflow: hidden;
    position: relative;
  }
</style>