<template>
  <div @click="login">
    <div class="head">
      <div class="main">
        <img src="../../../public/myself/touxiang.jpg">
        <div class="ind">
          <div class="name">
            <span>点击登录</span>
          </div>
          <div class="fensi">
            <p>登录更精彩</p>
          </div>
        </div>
      </div>
    </div>
    <div class="huiyuan">
      <div class="lv">
        <div class="hydj">
          <img src="../../../public/myself/LV.png"><span>会员等级</span>
        </div>
        <img src="../../../public/myself/xian.jpg" class="line">
        <div class="vip"><img src="../../../public/myself/V.png"><span>VIP俱乐部</span></div>
      </div>
      <img src="../../../public/myself/c72.png" class="hy_x">
    </div>
    <div class="aa">
      <div class="list">
        <div class="list_l">
          <div class="icon">
            <img src="../../../public/myself/sc.png" >
          </div>
          <p>收藏</p>
        </div>
        <div class="list_r">
          <!-- <span>2张即将过期</span> -->
          <div class="list_jt">
            <img src="../../../public/myself/jt.png">
          </div>
        </div>
      </div>
      <img src="../../../public/myself/c72.png" class="list_x">
      <div class="list">
        <div class="list_l">
          <div class="icon">
          <img src="../../../public/myself/zjll.png" >
          </div>
          <p>最近浏览</p>
        </div>
        <div class="list_r">
          <!-- <span>2张即将过期</span> -->
          <div class="list_jt">
          <img src="../../../public/myself/jt.png">
          </div>
        </div>
      </div>
    </div>
    <img src="../../../public/myself/c72.png" class="list_kx">
    <div class="aa">
      <div class="list">
        <div class="list_l">
          <div class="icon">
            <img src="../../../public/myself/ddp.png" >
          </div>
          <p>待点评</p>
        </div>
        <div class="list_r">
          <!-- <span>2张即将过期</span> -->
          <div class="list_jt">
            <img src="../../../public/myself/jt.png">
          </div>
        </div>
      </div>
    </div>
    <img src="../../../public/myself/c72.png" class="list_kx">
    <div class="aa">
      <div class="list">
        <div class="list_l">
          <div class="icon">
            <img src="../../../public/myself/dd.png" >
          </div>
          <p>订单</p>
        </div>
        <div class="list_r">
          <!-- <span>2张即将过期</span> -->
          <div class="list_jt">
            <img src="../../../public/myself/jt.png">
          </div>
        </div>
      </div>
      <img src="../../../public/myself/c72.png" class="list_x">
      <div class="list">
        <div class="list_l">
          <div class="icon">
          <img src="../../../public/myself/kj.png" >
          </div>
          <p>卡券</p>
        </div>
        <div class="list_r">
          <span>领取更多优惠</span>
          <div class="list_jt">
          <img src="../../../public/myself/jt.png">
          </div>
        </div>
      </div>
      <img src="../../../public/myself/c72.png" class="list_x">
      <div class="list">
        <div class="list_l">
          <div class="icon">
          <img src="../../../public/myself/jf.png" >
          </div>
          <p>积分</p>
        </div>
        <div class="list_r">
          <span>9</span>
          <div class="list_jt">
          <img src="../../../public/myself/jt.png">
          </div>
        </div>
      </div>
      <img src="../../../public/myself/c72.png" class="list_x">
      <div class="list">
        <div class="list_l">
          <div class="icon">
          <img src="../../../public/myself/jf.png" >
          </div>
          <p>钱包</p>
        </div>
        <div class="list_r">
          <!-- <span>9</span> -->
          <div class="list_jt">
          <img src="../../../public/myself/jt.png">
          </div>
        </div>
      </div>
    </div>
    <img src="../../../public/myself/c72.png" class="list_kx">
    <div class="aa">
      <div class="list">
        <div class="list_l">
          <div class="icon">
            <img src="../../../public/myself/gxxx.png" >
          </div>
          <p>贡献信息</p>
        </div>
        <div class="list_r">
          <span>添加商户，贡献记录</span>
          <div class="list_jt">
            <img src="../../../public/myself/jt.png">
          </div>
        </div>
      </div>
      <img src="../../../public/myself/c72.png" class="list_x">
      <div class="list">
        <div class="list_l">
          <div class="icon">
          <img src="../../../public/myself/sz.png" >
          </div>
          <p>设置</p>
        </div>
        <div class="list_r">
          <!-- <span>2张即将过期</span> -->
          <div class="list_jt">
          <img src="../../../public/myself/jt.png">
          </div>
        </div>
      </div>
      <img src="../../../public/myself/c72.png" class="list_x">
      <div class="list">
        <div class="list_l">
          <div class="icon">
          <img src="../../../public/myself/gd.png" >
          </div>
          <p>更多</p>
        </div>
        <div class="list_r">
          <span>联系客服、诚信分等</span>
          <div class="list_jt">
          <img src="../../../public/myself/jt.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    login(){
      this.$router.push("/login")
    }
  },
}
</script>
<style lang="scss" scoped>
  .head{
    display: flex;
    justify-content: space-between;
    background: url("../../../public/myself/bj_02.jpg") no-repeat;
    background-size: 100%;
    font-family: "微软雅黑";
    height: 30%;
    .main{
      display: flex;
      margin: 10% 0 0 2%;
        img{
          // height: inherit;
          width: 70px;
          overflow: hidden;
          border-radius: 50%;
        }
        .ind{
          margin:2px 0 0 10px;
        .name{
          span{
            font-size: 22px;
            font-weight:bold;
            margin-right: 5px;
          }
          img{
            width: 20%;
          }
          .img1{
            width: 15%;
          }
        } 
        .fensi{
          display: flex;
          color: #5f5f5f;
          font-size: 0.8rem;
          margin-top: 5px;
        } 
        }
      }
    .personal{
      background: url(../../../public/myself/do2.png) no-repeat;
      width: 120px;
      height: 34px;
      background-size: inherit;
      color: #fff;
      line-height: 28px;
      padding-left: 10px;
      box-sizing: border-box;
      margin:50px -20px 0 0;
      span{
        font-size:0.9rem;
      }
      img{
        width: 10px;
        margin:10px 0 0 2px; 
        opacity: 0.8;
      }
    }
  }
  .huiyuan{
    text-align: center;
    .lv{
      width: 100%;
      display: flex;
      justify-content: center;
      background: url("../../../public/myself/bj_03.jpg") no-repeat;
      background-size: 100%;
      .line{
        width: 3px;
        height: 20px;
        margin: 35px 30px 0;
      }
      img{
        width: 30px;
        margin-top: 30px;
      }
      span{
        font-size: 18px;
        font-weight: bold;
        vertical-align: 8px;
      }
    }
    .hy_x{
      width: 85%;
      height: 1px;
      margin: 5px 0;
      opacity: 0.3;
    }
    .news{
      display: flex;
      justify-content: space-around;
      line-height: 50px;
      background: url("../../../public/myself/bj_04.jpg") no-repeat;
      background-size: 100%;
      margin-top: 12px;
      color: #5f5f5f;
      margin-bottom: 10px;
      img{
        width: 10%;
        margin: 0px 5px 0 0px;
      }
      p{
        font-size: 0.8rem;
        margin-top: -20px;
        span{
          vertical-align: 5px;
        }
      }
      .btn{
        width: 90px;
        height: 30px;
        background: none;
        border: 1px solid #dddddd;
        margin-top: -13px;
        margin-right: 20px;
        border-radius: 20px;
        text-decoration: none;
        color: #000;
        line-height: 30px;
        
      }
    }
  }
  .aa{
    .list{
      // width: 100%;
      display: flex;
      justify-content: space-between;
      .list_l{
        display: flex;
        justify-content: flex-start;
        .icon{
          width: 60px;
          padding-top: 3px;
        img{
          width: 50%;
          margin: 0 10px 0 20px;
        }
        }
        p{
          width: 60px;
          margin-top: 8px;
          font-size: 15px;
        }
      }
      .list_r{
        display: flex;
        justify-content: flex-start;
        .list_jt{
          width: 12px;
          margin: 10px 15px 0 10px;
        img{
          width: 100%;
        }
        }
        span{
          color: #b5b5b5;
          font-size: 12px;
          margin-top: 8px;
        }
      }
    }
    .list_x{
      width: 82%;
      height: 1px;
      margin: 5px 0;
      margin-left: 14%;
      opacity: 0.3;
    }
  }
  .list_kx{
    height: 8px;
    opacity: 0.4;
  }
</style>