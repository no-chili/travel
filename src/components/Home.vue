<template>
  <div>
    <Header />
    <!-- 主体部分 -->
    <section>
      <div class="container">
        <!-- 推荐景点 -->
        <Scenic :rec="rec" />
        <!-- 天气 -->
        <div class="weather_inner">
          <div class="today" :class="{ see: see }">
            <h2 class="where">{{ weather.city }}</h2>
            <div class="time">
              <div>{{ weather.wea }}</div>
              <div>{{ weather.date }}</div>
            </div>
            <div class="tem">
              <div>高温{{ weather.tem1 }}℃</div>
              <div>低温{{ weather.tem2 }}℃</div>
            </div>
          </div>
          <ul class="next" :class="{ see: see }">
            <li v-for="(item, index) in weather.next" :key="index">
              <div class="mini">{{ item.day }}</div>
              <div class="mini">{{ item.wea }}</div>
              <div class="mini">{{ item.tem1 }}℃</div>
              <div class="mini">{{ item.tem2 }}℃</div>
            </li>
          </ul>
        </div>
        <!-- 景点卡片 -->
        <div class="card-inner">
          <Card :it="arr" />
          <p><a href="http://localhost:8080/#/scenery">更多</a></p>
        </div>
      </div>
    </section>
    <footer>
      <h1>科技创新月作品</h1>
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
  data() {
    return {
      see: false,
      weather: {
        city: "",
        date: "",
        tem1: "",
        tem2: "",
        wea: "",
        next: [],
      },
      rec: [],
      arr: [],
    };
  },
  methods: {
    // 下滑时显示
    handleScroll() {
      let topOffset =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (topOffset > 10) {
        this.see = true;
      }
    },
    // 获取天气数据
    async getWeather() {
      const { data } = await this.$http.get(
        "https://v0.yiketianqi.com/api?unescape=1&version=v9&appid=88438678&appsecret=DSzi6tJF"
      );
      this.weather.city = data.city;
      this.weather.date = data.data[0].date;
      this.weather.tem1 = data.data[0].tem1;
      this.weather.tem2 = data.data[0].tem2;
      this.weather.wea = data.data[0].wea;
      data.data.forEach((item) => {
        let it = {};
        it.day = item.day;
        it.tem1 = item.tem1;
        it.tem2 = item.tem2;
        it.wea = item.wea;
        this.weather.next.push(it);
      });
      this.weather.next.shift();
    },
    //获取主页景点数据
    async getdata() {
      const { data: res } = await this.$http.get("http://localhost:8080/api/main");
      this.arr = res.arr;
      this.rec = res.rec;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  created() {
    this.getWeather(), 
    this.getdata();
  },
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
  color: #fff;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  height: 300px;
  width: 1400px;
  /* background: rgb(48, 45, 48); */
}

.today {
  flex: 3;
  background: rgba(87, 162, 172, 0.3);
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
  font-size: 20px;
  /* background-color: #666; */
}
.tem {
  font-size: 20px;
  display: flex;
  height: 100px;
  /* background-color: rgb(122, 98, 98); */
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
.next li {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 120px;
  height: 300px;
  margin-left: 33px;
  background: rgba(87, 162, 172, 0.3);
}
.mini {
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  margin: 10px 0;
  width: 100%;
  height: 50px;
  /* background-color: #111; */
}
.see {
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
  background-color:rgb(113, 174, 182);
}
@keyframes see {
  0% {
    top: 100px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}
</style>