<template>
  <div class="box">
    <div class="carousel-messagebox">
      <transition-group tag="ul" enter-active-class="animated fadeInUp"  
        leave-active-class="animated fadeOutUp">  
        <li v-show="idx == isCurrent" v-for="(item, idx) in messageList" :key="idx" :class="['carousel-message']">
          <span class="good">{{item.name}}</span>
          <span>开通了</span>
          <span class="good">{{item.prizeName}}</span>
        </li>
      </transition-group> 
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      messageList: [
        {name:"十二****就",prizeName:"腾讯超高级会员"},
        {name:"南城旧****梦",prizeName:"华为会员"},
      ],
      isCurrent:0
    }
  },
  methods:{
    autoPlay () {
      let length = this.messageList.length;
      if (this.isCurrent >= length) {
        this.isCurrent = 0;
        this.autoPlay();
      } else {
        setTimeout(()=>{
          this.isCurrent++;
          this.autoPlay();
        }, 3000)
      }
    },
  },
  mounted(){
    this.autoPlay();
  }
}
</script>
<style>
.box{
  width: 300px;
  height: 200px;
  border: 1px dashed pink;
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel-messagebox {
  width:260px;
  height: 30px;
}
.carousel-message {
  width:220px;
  height: 30px;
  line-height:30px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  background: url('../../../public/myself/xian.jpg') 16px center no-repeat rgba(0,0,0,0.6);
  background-size:20px 16px;
  border-radius: 30px;
  padding-left:30px;
  position: absolute;
  color:#fff;
  display: -webkit-box;
  -webkit-box-pack: left;
  -webkit-box-align: center;
}
.good {
  color:#ffe795;
  width: 80px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  display: block;
  height: 30px;
  line-height:30px;
  margin-left: 8px;
}

</style>