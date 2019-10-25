<template>
  <div>
    <div class="wctx">
      <!-- 上层头像 -->
      <div class="tx">
        <img :src="touxiang" />
        <div class="nc">
          <span>Angeli</span>
          <p>7月27日</p>
          <!-- 黄钻 -->
          <!-- <img id="imgz" :src="huang" > -->
          <img id="imgl" :src="dengji" />
        </div>
      </div>
      <div class="gz">
        <span>关注</span>
      </div>
    </div>
     <!-- 实物照片 -->
     <!-- 两张 -->
     <div class="zhanshi2">
      <img :src="logo" />
      <img :src="logo" />
    </div>
     <!-- 三张 -->
     <div class="zhanshi3">
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
    </div>
     <!-- 四张 -->
     <div class="zhanshi4">
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
    </div>
     <!-- 五张 -->
    <div class="zhanshi5">
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
    </div>
    <!-- 六张 -->
    <div class="zhanshi6">
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
    </div>
    <!-- 7张 -->
    <div class="zhanshi7">
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
    </div>
    <!-- 8张 -->
    <div class="zhanshi8">
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
    </div>
    <!-- 9张 -->
    <div class="zhanshi9">
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
      <img :src="logo" />
    </div>
  <!-- 文本内容 -->
    <div class="card-mid">
      {{message}}
    </div>
    <p class="changwen">全部</p>
    <!-- 打分 -->
    <div class="dafen">
      <span>打分</span>
      <span>
        <img :src="fenshu" alt />
      </span>
    </div>
    <!-- 地址 -->
    <div class="dizhi">
      <img :src="logo" />
      <div class="quyu">
        <span>H&M(皇庭广场区)</span>
        <span>福田区</span>
      </div>
      <div class="dz">
        <img :src="dianzan" />
        <span>401</span>
      </div>
    </div>
    <!-- 浏览 -->
    <div class="liulan">
      <span>浏览</span>
      <span>29.2万</span>
    </div>
    <!-- 点赞评论 -->
    <div class="zhuanfa">
      <div class="zhuanfa_dianzan">
        <img class="zhuanfa_dz" :src="zhuanfa_dz" alt="">
        <span>1501</span>
        <img class="zhuanfa_tx1" :src="zhuangfa_tx1" alt="">
        <img class="zhuanfa_tx2"  :src="zhuangfa_tx2" alt="">
        <img class="zhuanfa_tx3"  :src="zhuangfa_tx3" alt="">
      </div>
      <div class="zhuanfa_zp">
        <img class=".zhuanfa_xx" :src="zhuanfa_xx" alt="">
        <span>69</span>
        <img class=".zhuanfa_px"  :src="zhuanfa_pl" alt="">
        <span>268</span>
        <img class=".zhuanfa_zf"  :src="zhuanfa_zf" alt="">
      </div>
    </div>
    <div class="pinglun">
      <ul>
        <li>
          <span>培培5261</span>:
          <span>风格转变很快</span>
        </li>
        <li>
          <span>dpuser_763111</span>:
          <span>好啊</span>
        </li>
        <li>
          <span>不忘初心</span>:
          <span>漂亮</span>
          </li>
      </ul>
      <p>查看全部175条评论</p>
      <div class="xhx">
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zhuanfa_zf:require("../../assets/zf.jpg"),
      zhuanfa_pl:require("../../assets/pl.jpg"),
      zhuanfa_xx:require("../../assets/guanzhu/gbb.png"),
      zhuangfa_tx3:require("../../assets/guanzhu/mz.jpg"),
      zhuangfa_tx2:require("../../assets/guanzhu/xc.jpg"),
      zhuangfa_tx1:require("../../assets/guanzhu/ms.jpg"),
      zhuanfa_dz:require("../../assets/dz.jpg"),
      dianzan: require("../../assets/guanzhu/gbb.png"),
      logo: require("../../assets/guanzhu/fya.png"),
      fenshu: require("../../assets/guanzhu/fya.png"),
      // huang:require("../../assets/guanzhu/zuan.png"),
      dengji: require("../../assets/guanzhu/start.png"),
      touxiang: require("../../assets/guanzhu/ds.jpg"),
      message: `
      金色，属于大地
      山川披锦缎
      碧海闪金光
      九州龙腾跃
      欢歌写华章
      金色，属于收获
      柿子挂满枝头
      装点着祖国的南国北疆
      石榴露出满腹经纶
      叙说着团结奋斗的力量
      金色，属于幸福
      是女排姑娘
      第九次捧起奖杯
      是祖国颁发的
      那一枚枚勋章`
    };
  }
};
</script>

<style lang="scss">
.card-mid {
  overflow: hidden; //超出部分影藏
  -webkit-line-clamp: 4; //限制行数
  text-overflow: ellipsis; //超过部分用省略号显示
  display: -webkit-box; //盒子模型
  -webkit-box-orient: vertical; //从顶部向底部垂直布置子元素
}
// .expansion {
//   white-space: pre-line;
//   width: 100%;
//   overflow: hidden;
//   -webkit-line-clamp: 4;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-box-orient: vertical;
// }
/*头像昵称*/
.wctx {
  display: flex;
  height: 60px;
  width: 100%;
  position: relative;
}
.tx img {
  display: flex;
  position: relative;
  top: 10px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.nc {
  position: absolute;
  left: 45px;
  top: 10px;
}
.nc span {
  color: rgb(120, 120, 230);
  font-size: 20px;
}
.nc p {
  color: #aaa;
  font-size: 10px;
}
.nc #imgl {
  position: absolute;
  height: 20px;
  width: 50px;
  left: 65px;
  top: 0px;
  border-radius: 20px;
}
.gz {
  width: 50px;
  height: 20px;
  position: absolute;
  display: flex;
  right: 20px;
  top: 15px;
  line-height: 20px;
  justify-content: center;
  border: burlywood solid 1px;
  border-radius: 20px;
}
.gz span {
  font-size: 2px;
  color: burlywood;
}
/*实物照片*/
//两张
.zhanshi2{
  width:100%;
  display: none;
}
.zhanshi2 img{
  width:48%;
  height: 180px;
  padding-right:2%;
}
//三张
.zhanshi3{
  width:100%;
  display: none;
}
.zhanshi3 img{
  width:31%;
  height:120px;
  padding-right:2%;
}
// 四张
.zhanshi4{
  width:100%;
  display: none;
}
.zhanshi4 img{
  width:48%;
  height: 180px;
  padding-right:2%;
}
/*5张*/
.zhanshi5{
  width:100%;
  display: none;
}
.zhanshi5 img{
  width:48%;
  height: 180px;
  padding-right:2%;
}
.zhanshi5 img:nth-child(n+3){
  width:31%;
  height:120px;
}
// 六张
.zhanshi6{
  width:100%;
  display: none;
}
.zhanshi6 img{
  width:31%;
  height:120px;
  padding-right:2%;
}
//七张
.zhanshi7{
  width:100%;
  display: none;
}
.zhanshi7 img{
  width:31%;
  height:120px;
  padding-right:2%;
}
//八张
.zhanshi8{
  width:100%;
  display: none;
}
.zhanshi8 img{
  width:31%;
  height:120px;
  padding-right:2%;
}
//九张
.zhanshi9{
  width:100%;
  // display: none;
}
.zhanshi9 img{
  width:31%;
  height:120px;
  padding-right:2%;
}
/*打分*/
.dafen {
  width: 100%;
  height: 30px;
  line-height: 30px;
}
.dafen img {
  width: 15px;
  height: 15px;
  top: 7px;
  left: 40px;
  padding-left:5px;
}
// 地址
.dizhi {
  position: relative;
  width: 100%;
  height: 80px;
  background: #eee;
  line-height: 80px;
}
.dizhi > img {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 20px;
  left: 20px;
}
.quyu {
  position: absolute;
  font-size: 15px;
  top: 0px;
  left: 75px;
}
.dz {
  position: absolute;
  width: 120px;
  right: 0px;
  text-align: right;
  padding-right: 20px;
}
.dz img {
  height: 20px;
  width: 20px;
  padding-right: 5px;
}
/*浏览*/
.liulan {
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #aaa;
}
.liulan span {
  padding-right: 5px;
}
.changwen{
  color:blue;
}
/*转发*/
.zhuanfa{
  display: flex;
  width: 100%;
  height:60px;
  justify-content: space-between;
}
.zhuanfa div{
  position: relative;
  line-height: 60px;
}
.zhuanfa_dz{
  width:30px;
  height:30px;
  position: absolute;
  top:15px;
}
.zhuanfa .zhuanfa_dianzan span{
  position: absolute;
  left:35px;
}
.zhuanfa_tx1,.zhuanfa_tx2,.zhuanfa_tx3{
  border-radius: 50%;
  width:30px;
  height:30px;
}
.zhuanfa_tx1{
  position: absolute;
  left:80px;
  top:15px;
}
.zhuanfa_tx2{
  position: absolute;
  left:98px;
  top:15px;
}
.zhuanfa_tx3{
  position: absolute;
  left:116px;
  top:15px;
}
.zhuanfa_zp span{
  padding-right:10px;
}
.zhuanfa_zp img{
  width:20px;
  height:20px;
}
.pinglun span:first-child{
  color:blue;
}
.pinglun p{
  color:#ccc;
  font-size:14px;
}
.xhx p{
  height:10px;
  width:100%;
  background: #ccc;
  margin-top:10px;
}
</style>