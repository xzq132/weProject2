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
              <div>
                <img src="../../assets/guanzhu/ch.jpg" alt />
              </div>
              <div class="span_top">
                <span class="span1">
                  深圳吃喝玩乐
                  <div class="span2">18091人加入</div>
                </span>
                <span class="text">
                  <i>+</i>加入
                </span>
              </div>
              <!-- 介绍 -->
            </div>
            <!-- 介绍文字 -->
            <div
              class="tar_text"
            >即日起，鹏城吃喝玩乐正式更名为深圳吃喝玩乐。这是一个圈子，包容所有关于身边的一切，美食、旅行、生活、八卦、情感等等。欢迎分享你生活中的点点滴滴，找到志同道合的朋友，成为彼此的知己！</div>
            <div class="ge"></div>
          </div>
        </div>
        <div class="tar_tow" v-show="isshow[2].alive==1">
          <!-- 吃货研究所 -->
          <div class="tar_header">
            <div class="tar_header_top">
              <div>
                <img src="../../assets/guanzhu/ms.jpg" alt />
              </div>
              <div class="span_top">
                <span class="span1">
                  美食厨房DIY
                  <div class="span2">84781人加入</div>
                </span>
                <span class="text">
                  <i>+</i>加入
                </span>
              </div>
              <!-- 介绍 -->
            </div>
            <!-- 介绍文字 -->
            <div class="tar_text">
              厨艺比拼，高手过招。
              <br />互通有无，共同进步。
              <br />自己动手，其乐无穷。
              <br />爱生活，让我们从爱厨房开始吧
            </div>
            <div class="ge"></div>
          </div>
        </div>
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
      activeKey: 1,
      isshow: [
        { alive: 0 },
        { alive: 1 },
        { alive: 0 },
        { alive: 0 },
        { alive: 0 },
        { alive: 0 },
        { alive: 0 },
        { alive: 0 },
        { alive: 0 },
        { alive: 0 }
      ]
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
    aclick(e) {
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
/deep/.van-sidebar {
  background: #f5f5f5;
}
//  侧边导航栏
.daohan {
  display: flex;
  margin-top: 40px;
  .tar {
    //  精选部落
    width: 100%;
    .tar_tow {
      .tar_header {
        margin: 15px;
        .tar_header_top {
          display: flex;
          img {
            width: 65px;
            border-radius: 10px;
          }
          .span_top {
            width: 100%;

            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            .span1 {
              font-weight: bold;
              margin: 0px 0 15px 15px;
            }
            .text {
              display: block;
              background: #f76904;
              color: #fff;
              font-size: 15px;
              width: 60px;
              text-align: center;
              height: 27px;
              border-radius: 15px;
              i {
                font-size: 20px;
                margin-right: 5px;
              }
            }
          }
          .span2 {
            font-size: 14px;
            font-weight: normal;
            color: #333;
            margin-top: 5px;
          }
        }
        // 内容文字
        .tar_text {
          background: #eee;
          border-radius: 5px;
          height: 50px;
          width: 290px;
          margin-top: 8px;
          padding: 10px;
          color: #333;
          font-size: 14px;
          overflow: hidden;
          line-height: 19px;
          // 超出行数...
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
        .ge {
          margin-top: 15px;
          height: 1px;
          background: #eee;
        }
      }
    }
  }
}
</style>