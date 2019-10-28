<template>
    <vue-seamless-scroll :data="listData" :class-option="optionSingleHeight" class="seamless-warp">
        <ul class="item">
            <li v-for="(item,i) in listData" @click="getData(item)" :key="i">
                <img src="../../../public/myself/laba.png">
                <span class="title" v-text="item.title"></span>
                <span class="date" v-text="item.date"></span>
            </li>
        </ul>
    </vue-seamless-scroll>
</template>
<script>
export default {
    name: "demo",
    data () {
        return {
            listData: [{
                'title': '点击领取78元升级大礼',
                'date': '立即领取'
            }, {
                'title': '距离Lv2只差72贡献值，加油哟',
                'date': '赚贡献值'
            }
            // , {
            //     'title': '无缝滚动第三行无缝滚动第三行',
            //     'date': '2017-12-16'
            // }, {
            //     'title': '无缝滚动第四行无缝滚动第四行',
            //     'date': '2017-12-16'
            // }, {
            //     'title': '无缝滚动第五行无缝滚动第五行',
            //     'date': '2017-12-16'
            // }, {
            //     'title': '无缝滚动第六行无缝滚动第六行',
            //     'date': '2017-12-16'
            // }
            ]
        }
    },
  methods:{
            getData:function (item) {
                console.log(item.title);
            }
        },
    computed: {
        optionSingleHeight () {
            return {
                //                       （什么都不设置默认的）
                singleHeight: 30,       //（带停顿的）
                 waitTime:2500         //（停顿时间）
                // direction: 0          （从上往下的）
                // direction:2           （左右的）
                //step:1                 （调整速度的）0
                // hoverStop:false        (鼠标停留停止 离开继续运行（反之则停止）)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
  .seamless-warp {
    width: 100%;
    height: 30px;
    overflow: hidden;
    line-height:29px;
    // display: table;
    .title{
      color: #5f5f5f;
      vertical-align: 0px;
      font-size: 0.8rem;

    }
    img{
      width: 20px;
      margin: 0px 5px 0 20px;
      box-sizing:content-box;
      display: inline-table;
      vertical-align: middle;
    }
    .date{
      width: 70px;
      height: 22px;
      border: 1px solid #ddd;
      border-radius: 20px;
      color: #000;
      font-size: 12px;
      float: right;
      text-align: center;
      line-height: 22px;
      display: inline-table;
      vertical-align: middle;
      margin: 3px 20px 0 0;
      box-sizing: content-box;
    }
    }
</style>