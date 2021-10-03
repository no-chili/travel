<template>
  <div>
    <Header />
    <!-- 主体部分 -->
    <section>
      <div class="container">
        <!-- 推荐景点 -->
        <Scenic />
        <!-- 天气 -->
        <div class="weather_inner">
          <div class="today" :class="{ see:see }">
            <h2 class="where">长春</h2>
            <div class="time">
              <div>1</div>
              <div>2</div>
            </div>
            <div class="tem">
              <div>1</div>
              <div>2</div>
            </div>
          </div>
          <ul class="next" :class="{ see:see }">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <!-- 景点卡片 -->
        <div class="card-inner">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <p><a href="http://localhost:8080/#/scenery">更多</a></p>
        </div>
      </div>
    </section>
    <footer>
      <h1>框架</h1>
    </footer>
  </div>
</template>

<script>
import Card from "./Card.vue";
import Scenic from "./Scenic.vue";
import Header from "./Header.vue";
export default {
  name: "Home",
  components: {
    Scenic,
    Card,
    Header,
  },
  data(){
    return{
      see:false
    }
  },
  methods:{
    handleScroll(){
        let topOffset=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop
        if(topOffset>10){
          this.see=true
        }
    }
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll)
  }
};
</script>

<style scoped>
a {
  color: #ddd;
}

.container {
  width: 100vw;
  background-color: rgb(119, 190, 199);
}

.card-inner {
  position: relative;
  margin: 50px 50px 0;
  height: 600px;
  /* background-color: rgba(99, 99, 99, 0.3); */
}

.card-inner p {
  position: absolute;
  color: #ccc;
  right: 35px;
  bottom: 3px;
}

.weather_inner {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  height: 300px;
  width: 1400px;
  background: rgb(48, 45, 48);
}

.today {
  flex: 3;
  background: #fff;
  height: 100%;
  position: relative;
  opacity: 0;
  top: 100px;
}
.today .where {
  height: 50px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 25px 0;
  font-size: 25px;
  text-align: center;
  line-height: 50px;
}
.time {
  display: flex;
  height: 100px;
  background-color: #666;
}
.tem {
  display: flex;
  height: 100px;
  background-color: rgb(122, 98, 98);
}
.time div,
.tem div {
  flex: 1;
  height: 100%;
  text-align: center;
  line-height: 100px;
}
.next {
  flex: 6;
  display: flex;
  position: relative; 
  top: 100px;
  opacity: 0;
}
.next li{
  width: 120px;
  height: 300px;
  margin-left:33px;
  background-color: rgb(219, 207, 207);
}

.see{
  opacity: 1;
  top: 0;
  animation: see 1s forwards linear;
}

.hotel-inner {
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
@keyframes see {
    0%{
    top: 100px;
    opacity: 0;
  }
  100%{
    top: 0px;
    opacity: 1;
  }
}
</style>