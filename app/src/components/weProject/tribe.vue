<template>
  <div>
    <!-- 返回头部 -->
    <mt-header fixed title="兴趣部落">
      <router-link to="/shequheader" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 侧边导航栏 -->
    <div class="daohan">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item @click="show(0)" title="我加入的" />
        <van-sidebar-item @click="show(1)" title="精选部落" />
        <van-sidebar-item @click="show(2)" title="吃货研究所" />
        <van-sidebar-item @click="show(3)" title="就是要美丽" />
        <van-sidebar-item @click="show(4)" title="健康生活" />
        <van-sidebar-item @click="show(5)" title="爱宠联萌" />
        <van-sidebar-item @click="show(6)" title="居家" />
        <van-sidebar-item @click="show(7)" title="加油萌娃" />
        <van-sidebar-item @click="show(8)" title="出去浪" />
        <van-sidebar-item @click="show(9)" title="饮食男女" />
      </van-sidebar>
      <!-- 部落内容 -->
      <div class="tar">
        <!--  -->
        <div v-show="isshow[0].alive==1">
          <!--加入需要判断是否等陆  -->
        </div>
        <div class="tar_tow" v-show="isshow[1].alive==1">
          <!-- 精选部落 -->
          <div class="tar_header">
            <div class="tar_header_top">
              <img src="" alt="">
              <span>深圳吃喝玩乐</span>
              <span>18091人加入</span>
            </div>
            <div></div>
          </div>
        </div>
        <div v-show="isshow[2].alive==1">333</div>
        <div v-show="isshow[3].alive==1">444</div>
        <div v-show="isshow[4].alive==1">555</div>
        <div v-show="isshow[5].alive==1">666</div>
        <div v-show="isshow[6].alive==1">777</div>
        <div v-show="isshow[7].alive==1">888</div>
        <div v-show="isshow[8].alive==1">999</div>
        <div v-show="isshow[9].alive==1">333</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeKey: 0,
      isshow: [{ alive: 1 }, { alive: 0 }, { alive: 0 }, { alive: 0 }, { alive: 0 }, { alive: 0 }, { alive: 0 }, { alive: 0 }, { alive: 0 }, { alive: 0 }]
    };
  },
  methods: {
    show(n) {
      for (var i = 0; i < this.isshow.length; i++) {
        if (n == i) {
          this.isshow[i].alive = 1;
          // console.log(n, i);
        } else {
          this.isshow[i].alive = 0;
        }
      }
    },
    aclick(e){
      console.log(e.target);
    }
  }
};
</script>
<style lang="scss" scoped>
//返回头样式
/deep/.mint-header-title,
/deep/.mintui {
  color: #000;
  font-size: 17px;
}
/deep/.mintui {
  font-size: 20px;
}
/deep/.mint-header {
  background: #fff;
}
/deep/.mint-header.is-fixed {
  border-bottom: 1px solid #eee;
}
/deep/.van-sidebar {background: #f5f5f5}
//  侧边导航栏
.daohan {
  display: flex;
  margin-top: 40px;
 .tar{
   
 }
}
</style>