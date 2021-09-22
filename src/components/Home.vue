<template>
  <div>
    <header>
      <nav>
        <span>HOME</span>
        <span></span>
        <span>MYLOG</span>
      </nav>
    </header>
    <!-- 主体部分 -->
    <section>
      <div class="container">
        <!-- 推荐景点 -->
        <Scenic/>
        <!-- 景点卡片 -->
        <div class="card-inner"></div>
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
import Scenic from './Scenic.vue'
export default {
  name: "Home",
  components:{
      Scenic
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  width: 100vw;
  height: 100px;
  background-color: rgb(119, 190, 199);
}

section {
  width: 100vw;
  background-color: rgb(102, 226, 195);
}

.container {
  width: 100vw;
  background-color: #789;
}

.card-inner {
  margin: 50px 50px 0;
  height: 600px;
  background-color: #999;
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