<template>
   <ul class="plx" >
            <li>
              <span class="pl1">800_蚊子12385:</span>
              <span class="pl2">支持</span>
            </li>
            <li>
              <span class="pl1">800_蚊子12385:</span>
              <span class="pl2">666</span>
            </li>
            <li>
              <span class="pl1">800_蚊子12385:</span>
              <span class="pl2">很好</span>
            </li>
            <li>
              <span class="pl3">查看全部52条评论</span>
            </li>
          </ul>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
   //根据帖子id查询它的用户的评论列表
    // dzpl(event){
      // var pid=event.pid;
      //创建url请求
      // var url="shequheader";
      // console.log(pid);
      //创建obj添加参数
      // var obj={pid};
      //发送ajax
      // this.axios.get(url,{params:obj}).then(res=>{
       
      // })
      
    // },
}
</script>
<style lang="scss" scoped>
   // 评论详情
  .plx {
    list-style: none;
    margin: 15px 0px 15px 0px;
    li {
      .pl1,
      .pl2 {
        font-size: 15px;
      }
      .pl1 {
        color: #05989c;
      }
      .pl3 {
        display: block;
        font-size: 14px;
        margin-top: 5px;
        color: #666;
      }
    }
  }
</style>