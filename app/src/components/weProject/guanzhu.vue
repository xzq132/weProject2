<template>
  <div>
    <div class="sousuo1">
      <a class="sousuo2" type="input">搜索用户和评论</a>
      <img class="img1" :src="images" alt />
    </div>
    <div>
      <div class="kong">
        <p class="p1">关注里还是空的哦</p>
        <p class="p2">快去发现感兴趣的用户和点评吧</p>
      </div>
      <div class="tuijian">
        <span>你可能感兴趣的用户</span>
        <div class="chakan">
          <a href="javascript:;">查看全部</a>
          <img class="img2" :src="imggt" />
        </div>
      </div>
      <div class="huadong">
        <!-- 左右滑动 -->
      </div>
      <hr class="hr1">
      <div class="tui">
        <img class="img3" :src="imgxin" alt="">
        <span>为你推荐</span>
        <img class="img4" :src="imgX" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: require("../../assets/guanzhu/sousuo.png"),
      imggt: require("../../assets/guanzhu/ff0.png"),
      imgxin: require("../../assets/g5p.png"),
      imgX: require("../../assets/guanzhu/c3k.png")
    };
  }
};
</script>

<style lang="scss">
// 头部搜索
.sousuo1 {
  position: relative;
}
.sousuo2 {
  display: block;
  height: 25px;
  width: 70%;
  border: #ccc solid 1px;
  margin: 0 auto;
  line-height: 25px;
  border-radius: 20px;
  text-align: center;
  background: #ddd;
  color: #999;
  font-size: 15px;
}
.img1 {
  position: absolute;
  display: block;
  height: 20px;
  width: 20px;
  top: 2.5px;
  left: 27%;
}
//关注为空的时候
.kong {
  width: 100%;
  height: 80px;
  background: #eee;
  font-weight: 700;
  margin-top: 6px;
}
.p1 {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 5px;
}
.p2 {
  text-align: center;
  color: #ccc;
  font-size: 13px;
}
// 感兴趣的用户
.tuijian {
  display: flex;
  width: 100%;
  height: 60px;
  // justify-content: center;
  justify-content: space-between;
}
.tuijian span {
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
}
.chakan {
  position: relative;
  margin-right:20px;
}
.chakan a {
  display: block;
  color: #999;
  text-decoration: none;
  padding-top: 20px;
  margin-right:30px;
}
.img2 {
  position: absolute;
  left: 70px;
  top: 22px;
  width: 18px;
  height: 18px;
}
/*滑动*/
.huadong{
  width:100%;
  height:180px;
  background: #ccc;
}
/*下划线*/
.hr1{
  margin-top:2px;
  width:100%;
  height:10px;
  background: #ccc;
  border: none;
}
/*为你推荐*/
.tui{
  width:100%;
  height: 40px;
  position: relative;
  line-height: 40px;
}
.tui span{
  padding:30px;
  color:#999;
}
.img3{
  position: absolute;
  margin-top:10px; 
  width:20px;
  height:20px;
}
.img4{
  position:absolute;
  right:10px;
  margin-top:10px; 
  width:20px;
  height:20px;
}
</style>