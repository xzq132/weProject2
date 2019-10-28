DROP DATABASE IF EXISTS dzdp;
SET NAMES utf8;
CREATE DATABASE dzdp  CHARSET=utf8;
USE dzdp;
--用户评论表
CREATE TABLE dz_comment(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  pid INT,
  uid INT,
  cname VARCHAR(20),
  chead VARCHAR(128), 
  cgrade VARCHAR(20), 
  ccontent VARCHAR(300),
  ctime DATE,
  give INT
);
-- 添加用户点评数据
INSERT INTO dz_comment VALUES(null,'1','1','Ca糖豆n豆儿dy','src/assets/pinglun/kf.jpg','5','真香,666','2019/10/26','1');
INSERT INTO dz_comment VALUES(null,'1','2','培培5261','src/assets/pinglun/kf.jpg','6','继续加油 [加油]！','2019/10/26','0');
INSERT INTO dz_comment VALUES(null,'1','3','不忘初心','src/assets/pinglun/kf.jpg','8','看起来不错','2019/10/26','0');
INSERT INTO dz_comment VALUES(null,'2','1','Maosegone','src/assets/pinglun/kf.jpg','5','棒棒哒','2019/10/26','1');
INSERT INTO dz_comment VALUES(null,'2','2','不要珍珠的珍珠奶茶. 
','src/assets/pinglun/kf.jpg','6','厉害厉害','2019/10/26','0');
INSERT INTO dz_comment VALUES(null,'2','3','牵着熊熊逛街街','src/assets/pinglun/kf.jpg','8','看着很好吃啊','2019/10/26','0');

-- 帖子详情表
CREATE TABLE dz_invitation(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  iheadline VARCHAR(100),
  itribe VARCHAR(64), 
  igive DATE , 
  icontent VARCHAR(5000),
  ipicture VARCHAR(128),
  itime INT,
  dtime INT,
  ptime INT
);
INSERT INTO dz_invitation VALUES(null,'1','一期一会|海胆龙虾鲷鱼金枪生蚝...统统都是你的!','深圳吃喝玩乐','2019/10/25','中了点评的同城聚会，店家贴心的安排了包房给我们～菜品以虾为主，据说都是从','src/assets/pinglun/kf.jpg','189','44','18');
INSERT INTO dz_invitation VALUES(null,'2','自贡菜--给重辣症患者','美食厨房','2019/10/25','中了点评的同城聚会，店家贴心的安排了包房给我们～菜品以虾为主，据说都是从','src/assets/pinglun/kf.jpg','372','56','78');