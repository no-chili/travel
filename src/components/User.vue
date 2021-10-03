<template>
  <div class="user">
    <div class="idcard">
      <div class="header">
        <img
          src="http://pic1.win4000.com/wallpaper/5/594b273208eb8.jpg"
          alt=""
        />
      </div>
      <h1>name</h1>
      <div class="myinfo">
        <div class="info_item">
          <ul>
            <li>ID:7777785619</li>
            <li>邮箱:18875854140@163.com</li>
            <li>电话:18875854140</li>
            <li>地址:浙江省丽水市龙泉市安仁镇刘凡村下反而宁回复</li>
          </ul>
        </div>
        <div class="info_item">
          <ul>
            <h3>想去:</h3>
            <li>fys</li>
            <li>fys</li>
            <li>fys</li>
            <li>fys</li>
            <li>fys</li>
            <li>fys</li>
            <li>fys</li>
            <li>fys</li>
            <li>fys</li>
            <li>fys</li>
            <li>fys</li>
            <li>fys</li>
          </ul>
        </div>
        <div class="info_item">
          不知道写什么功能了
        </div>
        <div class="info_item">
          先空着，想到什么可以写再补吧
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
};
</script>

<style scoped>
.user {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-left: 80px;
}
.idcard {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: 95%;
  background-color: rgb(111, 171, 179);
  box-shadow: 0 5px 15px;
  border-bottom: none;
}
.header {
  width: 200px;
  height: 200px;
  margin: 15px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #fff;
}
.myinfo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 1200px;
  height: 500px;
  border-radius: 20px;
}
.info_item {
  margin: 0 5px;
  width: 500px;
  height: 200px;
  background-color: rgba(68, 204, 209, 0.3);
  font-size: 16px;
  padding: 50px 50px;
  border-radius: 20px;
  overflow: auto;
}
.info_item ul {
  float: left;
}
.info_item ul li{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>