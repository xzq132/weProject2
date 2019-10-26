DROP DATABASE IF EXISTS dzdp;
SET NAMES utf8;
CREATE DATABASE dzdp  CHARSET=utf8;
USE dzdp;
--用户评论表
CREATE TABLE comment(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  cname VARCHAR(20),--用户名
  chead VARCHAR(128), --用户头像路径
  cgrade VARCHAR(20), --用户等级
  ccontent VARCHAR(300),--评论内容
);