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
    <div>
      <!-- 实物照片 -->
    </div>
    <div v-bind:class="{ expansion : active }" class="card-mid">
      <!-- 文本内容 -->
      {{message}}
    </div>
    <p>全部</p>
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
        <img :src="dianzan" alt />
        <span>401</span>
      </div>
    </div>
    <!-- 浏览 -->
    <div class="liulan">
      <span>浏览</span>
      <span>29.2万</span>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
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
.expansion {
  white-space: pre-line;
  width: 100%;
  overflow: hidden;
  -webkit-line-clamp: 4;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
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
// .nc #imgz{
//   position: absolute;
//   height:18px;
//   width:18px;
//   top:2px;
//   left:58px;
//   z-index:999;
// }
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

/*打分*/
.dafen {
  // position: relative;
  width: 100%;
  height: 30px;
  line-height: 30px;
  background: #ccc;
}
.dafen img {
  // position: absolute;
  width: 15px;
  height: 15px;
  top: 7px;
  left: 40px;
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
</style>