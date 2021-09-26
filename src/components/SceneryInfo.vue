<template>
  <div>
    <Header />
    <div class="Sceneryinfo">
      <div class="maxwidth">
        <!-- 风景大图预览 -->
        <h1>预览大图</h1>
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
                <img
                  @click="infomation = true"
                  src="../assets/image/cbs.jpg"
                  alt=""
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img
                  @click="infomation = true"
                  src="../assets/image/cbs.jpg"
                  alt=""
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img
                  @click="infomation = true"
                  src="../assets/image/cbs.jpg"
                  alt=""
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img
                  @click="infomation = true"
                  src="../assets/image/cbs.jpg"
                  alt=""
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img
                  @click="infomation = true"
                  src="../assets/image/cbs.jpg"
                  alt=""
                />
              </div>
            </CarouselItem>
          </Carousel>
        </div>
        <!-- 景点图片 -->
        <h2>景点照片</h2>
        <ul class="scenerynav">
          <li><img src="../assets/image/cbs.jpg" alt="" /></li>
          <li><img src="../assets/image/cbs.jpg" alt="" /></li>
          <li><img src="../assets/image/cbs.jpg" alt="" /></li>
          <li><img src="../assets/image/cbs.jpg" alt="" /></li>
          <li><img src="../assets/image/cbs.jpg" alt="" /></li>
        </ul>
        <!-- 地图 -->
        <h2>景点地图</h2>
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
          <li><Icon type="md-heart" size="50" title="收藏" /></li>
          <li><Icon type="ios-chatbubbles" size="50" title="评论" /></li>
        </ul>
        <Drawer
          title="Basic Drawer"
          placement="top"
          :closable="false"
          v-model="infomation"
          height="500px"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            ipsum, incidunt ipsam ex suscipit in minima animi molestias corrupti
            nulla reprehenderit maiores harum rem aut voluptate consequatur
            distinctio porro aperiam earum hic quidem magnam enim sunt. Hic
            voluptatem perspiciatis vero earum. Harum deleniti vero doloremque
            doloribus iste perferendis reiciendis hic ullam voluptatem quidem
            qui aspernatur veniam a distinctio, nisi molestias nostrum
            voluptatibus fugit dolorem itaque reprehenderit, earum quaerat.
            Soluta, consequatur quasi quibusdam deserunt corporis magni tempora
            laboriosam iure. Fuga, temporibus voluptatibus, officiis officia
            blanditiis voluptas cum, et ipsam labore dolor neque molestiae! Qui
            deserunt aliquid modi expedita sapiente deleniti necessitatibus!
            Animi omnis fugiat optio ipsa eius in libero unde tempore tenetur
            repellendus hic, sed deserunt accusamus vel, quae aspernatur
            laudantium necessitatibus ea commodi quibusdam cupiditate sint sit
            excepturi eum! Asperiores tempora dolores labore in eveniet pariatur
            cupiditate numquam aut velit obcaecati placeat accusamus iusto
            adipisci voluptas molestias aliquid nisi esse, sequi earum illo quae
            optio? Provident mollitia voluptatum necessitatibus commodi earum
            enim ab magnam eveniet nostrum aliquid voluptatem officia assumenda
            deleniti neque recusandae dolorem maxime numquam dolor laboriosam
            autem, ducimus totam illo quod. Ipsa voluptatibus libero ad ipsum
            sapiente deserunt, ullam nulla praesentium amet animi quis, eius
            magni atque. Repellendus aspernatur alias nemo corrupti, magni atque
            velit perspiciatis molestias ad hic provident quae optio ex. Ut
            maiores magnam tenetur delectus consequatur repellendus deleniti,
            odio mollitia, dolore exercitationem corrupti amet culpa ab
            suscipit. Quia aperiam earum obcaecati similique tempora dolore ex
            dolores dolorem architecto. Aperiam perspiciatis consequuntur,
            corporis adipisci facilis provident deleniti blanditiis similique
            distinctio, vero aliquam nostrum. Reiciendis assumenda non tenetur
            magni reprehenderit nostrum optio iste voluptas dolor. Nisi
            necessitatibus ex dignissimos quod dolores qui fuga doloribus
            incidunt odio cumque et quam at nesciunt, sed illum. Labore
            distinctio voluptates modi sapiente, eveniet eius quod! Ab repellat
            sequi perferendis accusamus reiciendis, delectus nemo nihil
            consequatur praesentium facilis atque quaerat magnam tempore labore
            ullam ea porro pariatur fugit quod quos eius laudantium.
            Exercitationem minima, error quia nesciunt reprehenderit eius
            tempore fugiat quis, accusantium magni officiis ducimus consectetur
            quisquam soluta nisi deserunt architecto hic blanditiis debitis enim
            quaerat ipsam! Ullam cumque praesentium dolores ad cum? Perspiciatis
            impedit quibusdam exercitationem. Doloribus aperiam iure blanditiis
            soluta repellat magnam atque laudantium ratione dignissimos omnis
            maiores dolorum est nam aspernatur consequatur eligendi quam quaerat
            in dicta hic illum fugiat, molestias vero! Beatae perspiciatis, quod
            placeat laborum minima accusamus nulla odit officia, neque quasi
            quisquam. Inventore consequuntur commodi ipsam quaerat quidem,
            possimus non saepe, nisi esse culpa velit, neque accusantium ad.
            Neque autem repellat odio fugit perspiciatis pariatur unde
            blanditiis labore! Doloremque, nobis facere dicta sed veniam
            molestiae voluptatibus eligendi neque dolore, dolorem error. Nam
            sapiente rerum debitis molestias quaerat velit mollitia similique?
            Neque, cumque sunt aliquam voluptatem rerum explicabo, nemo quod
            tempore est dignissimos debitis. Enim delectus maiores, debitis
            dicta, eos quasi accusamus inventore, commodi doloremque quaerat
            aperiam expedita doloribus quia possimus harum repellat quod sint
            esse cupiditate? Blanditiis nostrum animi aperiam debitis libero.
            Eius ipsam odio quaerat, earum, magni optio doloribus adipisci
            aperiam voluptatibus accusamus aliquam.
          </p>
        </Drawer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";

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
      //   高德地图配置
      zoom: 15,
      center: [125.441458, 43.883363],
    };
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
  /* background-color: #2db7f5; */
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

.footer li{
  flex: 1;
  margin: 20px;
}

.footer li:hover{
  color: red;
}
</style>