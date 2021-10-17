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
                <img @click="infomation = true" :src="img1?img1:'https://pica.zhimg.com/80/v2-798dc758dbe699ca40a410fc93d7717f_720w.jpg?source=1940ef5c'" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img @click="infomation = true" :src="img2?img2:'https://pica.zhimg.com/80/v2-798dc758dbe699ca40a410fc93d7717f_720w.jpg?source=1940ef5c'" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img @click="infomation = true" :src="img3?img3:'https://pica.zhimg.com/80/v2-798dc758dbe699ca40a410fc93d7717f_720w.jpg?source=1940ef5c'" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img @click="infomation = true" :src="img4?img4:'https://pica.zhimg.com/80/v2-798dc758dbe699ca40a410fc93d7717f_720w.jpg?source=1940ef5c'" alt="" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img @click="infomation = true" :src="img5?img5:'https://pica.zhimg.com/80/v2-798dc758dbe699ca40a410fc93d7717f_720w.jpg?source=1940ef5c'" />
              </div>
            </CarouselItem>
          </Carousel>
        </div>
        <!-- 景点图片 -->
        <h2>景点照片</h2>
        <ul class="scenerynav">
          <li @click="value2 = 0"><img :src="img1?img1:'https://pica.zhimg.com/80/v2-798dc758dbe699ca40a410fc93d7717f_720w.jpg?source=1940ef5c'" /></li>
          <li @click="value2 = 1"><img :src="img2?img2:'https://pica.zhimg.com/80/v2-798dc758dbe699ca40a410fc93d7717f_720w.jpg?source=1940ef5c'" /></li>
          <li @click="value2 = 2"><img :src="img3?img3:'https://pica.zhimg.com/80/v2-798dc758dbe699ca40a410fc93d7717f_720w.jpg?source=1940ef5c'" /></li>
          <li @click="value2 = 3"><img :src="img4?img4:'https://pica.zhimg.com/80/v2-798dc758dbe699ca40a410fc93d7717f_720w.jpg?source=1940ef5c'" /></li>
          <li @click="value2 = 4"><img :src="img5?img5:'https://pica.zhimg.com/80/v2-798dc758dbe699ca40a410fc93d7717f_720w.jpg?source=1940ef5c'" /></li>
        </ul>
        <!-- 地图 -->
        <h2 @click="getCenter">景点地图</h2>
        <div class="scenerymap">
          <el-amap vid="amapDemo" :zoom="zoom" :center="center"> </el-amap>
        </div>
        <!-- 点评 -->
        <h2 @click="commenttext = false">景点评论</h2>
        <div class="otherscenery">
          <ul>
            <li
              class="commentbox"
              v-for="(item, index) in comment"
              :key="index"
            >
              <div class="headportrait">
                <img :src="item.headpho" alt="" />
              </div>
              <div class="comment">
                {{ item.content }}
              </div>
            </li>
          </ul>
        </div>
        <ul class="footer">
          <li>
            <Icon type="md-thumbs-up" size="50" title="赞" @click="like" />
          </li>
          <li>
            <Icon type="md-heart" size="50" title="收藏" @click="addWantTo" />
          </li>
          <li>
            <Icon
              type="ios-chatbubbles"
              size="50"
              title="评论"
              @click="commenttext = !commenttext"
            />
          </li>
        </ul>
        <!-- 评论 -->
        <div class="comment_info" v-if="commenttext">
          <textarea v-model="newcomment.content"></textarea>
          <div class="commitcomment" @click="commitcomment">发表评论</div>
        </div>
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
            <div>
              <Icon type="md-thumbs-up" size="50" title="赞" />{{
                ceneryInfo.like
              }}
            </div>
            <div>
              <Icon type="md-heart" size="50" title="收藏" />{{
                ceneryInfo.wantTO
              }}
            </div>
            <div>
              <Icon type="ios-chatbubbles" size="50" title="评论" />{{
                comment.length
              }}
            </div>
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
      comment: [],
      newcomment: {
        headpho: "",
        content: "",
      },
      //控制评论版显示与隐藏
      commenttext: false,
    };
  },
  methods: {
    // 获取中心点
    getCenter() {
      let address = this.ceneryInfo.name.replace(/[a-zA-Z ]*[a-zA-Z ]/, "");
      address=this.ceneryInfo.position;
      console.log(address);
      let Url = `https://restapi.amap.com/v3/geocode/geo?address=${address}&output=JSON&key=4454e91b25f893ac9603dbb2ade95316`;
      console.log(Url);

      let Ajax = {
        get: function (url, callback) {
          // XMLHttpRequest对象用于在后台与服务器交换数据
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.onreadystatechange = function () {
            // readyState == 4说明请求已完成
            if (xhr.readyState == 4) {
              if (xhr.status == 200 || xhr.status == 304) {
                callback(JSON.parse(xhr.responseText));
              }
            }
          };
          xhr.send();
        },
      };

      Ajax.get(Url,(val) => {
        console.log(val);
          if (val.geocodes.length>0) {
            this.center = val.geocodes[0].location.split(",");
          }
          console.log(this.center);
        })
    },
    // 获取景点信息
    async getSceneryInfo() {
      let name = window.localStorage.getItem("sceneryName");
      console.log(name);
      const { data: res } = await this.$http.post(
        "http://localhost:8080/api/SceneryInfo/scenery",
        {
          scenery: name,
        }
      );
      this.ceneryInfo = res[0];
      this.comment = this.ceneryInfo.comment;
      this.img1 = res[0].sceneryImgUrl[0];
      this.img2 = res[0].sceneryImgUrl[1];
      this.img3 = res[0].sceneryImgUrl[2];
      this.img4 = res[0].sceneryImgUrl[3];
      this.img5 = res[0].sceneryImgUrl[4];
      this.getCenter();
      this.getcomment();
    },
    //获取用户头像
    async getheadpho() {
      const { data: res } = await this.$http.get(
        "http://localhost:8080/api/profile"
      );
      this.newcomment.headpho = res.headpho;
      console.log(this.newcomment.headpho);
    },
    //like
    like() {
      this.$http.post("http://localhost:8080/api/like", {
        sceneryname: this.ceneryInfo.name,
      });
      this.getSceneryInfo();
    },
    // 添加为想去
    async addWantTo() {
      this.$http.post("http://localhost:8080/api/wantto", {
        sceneryname: this.ceneryInfo.name,
      });
      const { data: res } = await this.$http.post(
        "http://localhost:8080/api/addwantto",
        {
          wantto: this.ceneryInfo.name,
        }
      );
      if (res.status !== 200) {
        alert("添加失败");
      } else {
        alert("添加成功");
      }
      this.getSceneryInfo();
    },

    //获取评论
    async getcomment() {
      const { data: res } = await this.$http.post(
        "http://localhost:8080/api/getcomment",
        {
          sceneryname: this.ceneryInfo.name,
        }
      );
      console.log(res);
      if (res.status == 200) {
        this.comment = res.datas;
      }
    },
    //提交评论
    async commitcomment() {
      this.commenttext = !this.commenttext;
      const { data: res } = await this.$http.post(
        "http://localhost:8080/api/commitcomment",
        {
          sceneryname: this.ceneryInfo.name,
          content: this.newcomment.content,
        }
      );
      if (res.status !== 200) {
        return alert(res.message);
      }
      this.getSceneryInfo();
      return alert(res.message);
    },
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
  position: relative;
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
  float: left;
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

.comment_info {
  position: absolute;
  bottom: 0;
  width: 1200px;
  height: 200px;
  background-color: rgb(218, 218, 218);
  z-index: 999;
}

.comment_info textarea {
  resize: none;
  font-family: 微软雅黑;
  float: left;
  outline: none;
  text-indent: 2em;
  font-size: 16px;
  width: 100%;
  height: 80%;
}

.commitcomment {
  cursor: pointer;
  float: left;
  height: 20%;
  width: 100%;
  background-color: #666;
  color: #fff;
  text-align: center;
  line-height: 200%;
}
</style>