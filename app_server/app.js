// 1.npm i cors express -session 对象
//2.引入模块
const express=require("express");
const mysql =require("mysql");
const cors=require("cors");
const session=require("express-session");
//3.创建连接池
var pool=mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  port:3306,
  database:"dzdp",
  connectionLimit:15
})
//4.配置跨域模块
//运行哪个程序程序跨域访问服务器
// 脚手架：8080
// 服务器：5050
var server=express();
server.use(cors({
  // 允许列表
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true//每次请求需要验证
}))
// 5.配置session模块
server.use(session({
  secret:"128位字符串",//安全字符串
  resave:true,//请求时更新数据
  saveUninitialized:true  //保存初始值
}))
// 6.配置项目静态目录 public
server.use(express.static("public"))
// 7.创建express对象绑定5050端口
server.listen(5050)

// 功能接口
//1.指定帖子id的查询用户评论
server.get("/shequheader",(req,res)=>{
  // 获取用户uid
  // var uid=req.session.uid;
  // if(!uid){
  //   res.send({code:-1,msg:"请登录"});
  //   return;
  // }
  var pid=req.query.pid;
  // sql查询所有评论列表
  var sql="SELECT cid,uid,cname,chead,cgrade,ccontent,ctime,give FROM dz_comment WHERE pid=?";
  // 执行sql并放回结果
  pool.query(sql,[pid],(err,result)=>{
    if(err) throw err;
    res.send({code:200,msg:"查询成功",data:result})
  })
})
//2.查询帖子的介绍
server.get("/plstatil",(req,res)=>{
  //sql要根据帖子id查询帖子详情介绍
  var sql="SELECT pid,uid,iheadline,itribe,igive,icontent,ipicture,itime,dtime,ptime FROM dz_invitation"
  //执行sql并返回结果
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:200,msg:"查询成功",data:result})
  })
})
//3.根据帖子id查询帖子 帖子详情页/plstatil
server.get("/plasta",(req,res)=>{
  var pid=req.query.pid;
  var sql="SELECT uid,iheadline,itribe,igive,icontent,ipicture,itime,dtime,ptime FROM dz_invitation WHERE pid=?";
  pool.query(sql,[pid],(err,result)=>{
    if(err)throw err;
    res.send({code:200,msg:"查询成功",data:result})
  })
})
//4.根据帖子id插入评论数据 帖子详情页/plstatil
server.get("/pinlun",(req,res)=>{
  // 获取用户uid
  // var uid=req.session.uid;
  // if(!uid){
  //   res.send({code:-1,msg:"请登录"});
  //   return;
  // }
  var pid=req.query.pid;
  var ccontent=req.query.ccontent;
  var uid=req.query.uid;
  // sql插入用户的评论
  var sql="INSERT INTO dz_comment VALUES()  WHERE pid=?";
  // 执行sql并放回结果
  pool.query(sql,[pid],(err,result)=>{
    if(err) throw err;
    res.send({code:200,msg:"查询成功",data:result})
  })
})
//5.用户评论加入评论表
server.get("/ccontent",(req,res)=>{
  // var uid=req.session.uid;
  // if(!uid){
  //   res.send({code:-1,msg:"请登录"});
  //   return;
  // }
  var ccontent=req.query.ccontent;
  var pid=req.query.pid;
  var sql=`INSERT INTO dz_comment VALUES(null,${pid},null,null,null,null,${ccontent},now(),null)`;
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"添加成功"})
  })
})

