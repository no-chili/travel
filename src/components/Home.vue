<template>
  <div>
    <header>
      <nav>
        <a href="#"><span>HOME</span></a>
        <span></span>
        <a href="#"><span>MYLOG</span></a>
      </nav>
    </header>
    <!-- 主体部分 -->
    <section>
      <div class="container">
        <!-- 推荐景点 -->
        <Scenic/>
        <!-- 景点卡片 -->
        <div class="card-inner">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <p><a href="http://localhost:8080/#/scenery">更多</a></p>
        </div>
        <!-- 票价 -->
        <div class="ticket-inner"></div>
        <!-- 酒店 -->
        <div class="hotel-inner"></div>
      </div>
    </section>
    <footer>footer</footer>
  </div>
</template>

<script>
import Card from './Card.vue';
import Scenic from './Scenic.vue'
export default {
  name: "Home",
  components:{
      Scenic,
    Card
  }
};
</script>

<style scoped>
a{
  color: #ddd;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  width: 100vw;
  height: 100px;
  background-color:rgb(113, 174, 182);
  box-shadow: 0 3px 10px;
  margin-bottom: px;
}

header nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 26px;
}


.container {
  width: 100vw;
  background-color:rgb(119, 190, 199);
}

.card-inner {
  position: relative;
  margin: 50px 50px 0;
  height: 600px;
  background-color: rgba(99, 99, 99, 0.3);
}

.card-inner p{
  position: absolute;
  color: #ccc;
  right: 35px;
  bottom: 3px;
}

.ticket-inner{
    margin-top: 50px;
    height: 200px;
    background: rgb(48, 45, 48);
}

.hotel-inner{
    margin: 50px 0;
    height: 200px;
    background-color: rgb(54, 50, 45);
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 200px;
  background-color: rgb(83, 163, 80);
}
</style>