<template>
  <div>
    <Header />
    <div class="Sceneryinfo">
      <div class="maxwidth">
        <!-- 风景大图预览 -->
        <h1>{{ ceneryInfo.name }}</h1>
        <div class="scenerybox">
          <!-- 轮播 -->
          <Carousel
            autoplay
            v-model="value2"
            loop
            :autoplay-speed="6000"
            arrow="never"
          >
            <CarouselItem>
              <div class="demo-carousel">
                <img @click="infomation = true" :src="img1" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img @click="infomation = true" :src="img2" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img @click="infomation = true" :src="img3" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img @click="infomation = true" :src="img4" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img @click="infomation = true" :src="img5" />
              </div>
            </CarouselItem>
          </Carousel>
        </div>
        <!-- 景点图片 -->
        <h2>景点照片</h2>
        <ul class="scenerynav">
          <li @click="value2 = 0"><img :src="img1" /></li>
          <li @click="value2 = 1"><img :src="img2" /></li>
          <li @click="value2 = 2"><img :src="img3" /></li>
          <li @click="value2 = 3"><img :src="img4" /></li>
          <li @click="value2 = 4"><img :src="img5" /></li>
        </ul>
        <!-- 地图 -->
        <h2 @click="getCenter">景点地图</h2>
        <div class="scenerymap">
          <el-amap vid="amapDemo" :zoom="zoom" :center="center"> </el-amap>
        </div>
        <!-- 点评 -->
        <h2>景点评论</h2>
        <div class="otherscenery">
          <ul>
            <li class="commentbox">
              <div class="headportrait">
                <!-- <img src="#" alt=""> -->
              </div>
              <div class="comment">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus suscipit earum aspernatur dolor dolores a perferendis
                debitis expedita at quod minima ipsum alias fugiat pariatur
                enim, quidem laborum minus fuga impedit quibusdam porro eius ex
                natus quo! Itaque ullam nobis, non alias delectus officiis
                maiores in possimus ducimus, cumque odio eius iure deleniti
              </div>
            </li>
            <li class="commentbox">
              <div class="headportrait">
                <!-- <img src="#" alt=""> -->
              </div>
              <div class="comment">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus suscipit earum aspernatur dolor dolores a perferendis
                debitis expedita at quod minima ipsum alias fugiat pariatur
                enim, quidem laborum minus fuga impedit quibusdam porro eius ex
                natus quo! Itaque ullam nobis, non alias delectus officiis
                maiores in possimus ducimus, cumque odio eius iure deleniti
              </div>
            </li>
            <li class="commentbox">
              <div class="headportrait">
                <!-- <img src="#" alt=""> -->
              </div>
              <div class="comment">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus suscipit earum aspernatur dolor dolores a perferendis
                debitis expedita at quod minima ipsum alias fugiat pariatur
                enim, quidem laborum minus fuga impedit quibusdam porro eius ex
                natus quo! Itaque ullam nobis, non alias delectus officiis
                maiores in possimus ducimus, cumque odio eius iure deleniti
              </div>
            </li>
          </ul>
        </div>
        <ul class="footer">
          <li><Icon type="md-thumbs-up" size="50" title="赞" /></li>
          <li><Icon type="md-heart" size="50" title="收藏" @click="addWantTo" /></li>
          <li><Icon type="ios-chatbubbles" size="50" title="评论" /></li>
        </ul>
        <Drawer
          placement="top"
          :closable="false"
          v-model="infomation"
          height="300px"
        >
          <p class="font">
            {{ ceneryInfo.infomation }}
          </p>
          <div class="number">
            <div><Icon type="md-thumbs-up" size="50" title="赞" />66</div>
            <div><Icon type="md-heart" size="50" title="收藏" />66</div>
            <div><Icon type="ios-chatbubbles" size="50" title="评论" />99</div>
          </div>
        </Drawer>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Header from "./Header.vue";
// 高德地图
import AMap from "vue-amap";

Vue.use(AMap);
// 初始化高德地图的 key 和插件
AMap.initAMapApiLoader({
  key: "0a125e10974f3f7832802dbb904b29c1",
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor",
  ],
  v: "1.4.4",
});

export default {
  name: "SceneryInfo",
  components: {
    Header,
  },
  data() {
    return {
      value2: 0,
      infomation: false,
      valueDisabled: 2,
      //  高德地图配置
      city: "",
      // 地图显示等级
      zoom: 15,
      // 地图中心点
      center: [125.441458, 43.883363],
      // 景点信息
      ceneryInfo: {},
      img1: "",
      img2: "",
      img3: "",
      img4: "",
      img5: "",
    };
  },
  methods: {
    // 获取中心点
    getCenter() {
      let address = this.ceneryInfo.name.replace(/[a-zA-Z ]*[a-zA-Z ]/, "");
      console.log(address);
      let Url = `https://restapi.amap.com/v3/geocode/geo?address=${address}&output=JSON&key=4454e91b25f893ac9603dbb2ade95316`;
      this.$http.get(Url).then((val) => {
        if (val.data.geocodes[0].location) {
          this.center = val.data.geocodes[0].location.split(",");
        }
      }).catch(console.log);
    },
    // 获取景点信息
    async getSceneryInfo() {
      let name = window.sessionStorage.getItem("sceneryName");
      console.log(name);
      const { data: res } = await this.$http.post(
        "http://localhost:8080/api/SceneryInfo/scenery",
        {
          scenery: name,
        }
      );

      this.ceneryInfo = res[0];
      this.img1 = res[0].sceneryImgUrl[0];
      this.img2 = res[0].sceneryImgUrl[1];
      this.img3 = res[0].sceneryImgUrl[2];
      this.img4 = res[0].sceneryImgUrl[3];
      this.img5 = res[0].sceneryImgUrl[4];
      this.getCenter();
    },
    // 添加为想去
    async addWantTo(){
      const {data:res}=await this.$http.post('http://localhost:8080/api/addwantto',{
        wantto:this.ceneryInfo.name
      })
      if(res.status!==200){
        alert('添加失败')
      }else{
        alert('添加成功')
      }
    }
  },
  created() {
    this.getSceneryInfo();
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.Sceneryinfo {
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: rgb(113, 174, 182);
}

.maxwidth {
  width: 1200px;
  text-align: center;
}
.scenerybox {
  cursor: pointer;
  width: 1200px;
  height: 500px;
  background: #656;
  margin-bottom: 30px;
  overflow: hidden;
}

.scenerynav {
  display: flex;
  justify-content: space-around;
  width: 1200px;
  height: 100px;
  background-color: rgba(158, 152, 152, 0.5);
}
.scenerynav li {
  flex: 1;
  cursor: pointer;
  height: 80px;
  margin: 10px 20px;
  background: #987;
}

.scenerymap {
  width: 1200px;
  height: 500px;
  background: #ddd;
}

.otherscenery {
  width: 1200px;
}

.commentbox {
  margin: 30px 0;
  width: 1200px;
}

.headportrait {
  float: left;
  text-align: center;
  height: 70px;
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #666;
  overflow: hidden;
}

.comment {
  text-align: left;
  text-indent: 2em;
  font-size: 16px;
}

.footer {
  display: flex;
  width: 1200px;
}

.footer li {
  flex: 1;
  margin: 20px;
}

.footer li:hover {
  color: red;
}

.number {
  position: absolute;
  display: flex;
  width: 1536px;
  height: 50px;
  bottom: 50px;
}

.number div {
  flex: 1;
  text-align: center;
}

.font {
  text-indent: 2em;
  font-size: 16px;
}
</style>