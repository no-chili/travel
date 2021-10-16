<template>
  <div class="slider-inner">
    <div class="img_out">
      <div class="img"></div>
    </div>
    <div class="bar">
      <h1 class="scenerytitle">推荐景点</h1>
      <ul class="scenerycard">
        <li v-for="(item,index) in rec" :key="index"  class="card" @click="getc(item.name)">
          <img :src="item.sceneryImgUrl[0]">
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "Scenic",
  props:["rec"],
  methods:{   
    getc(value){
      console.log(value);
      window.sessionStorage.setItem('sceneryName',value)
      this.$router.push('/sceneryinfo')
    }
  }
};
</script>

<style scoped>
.slider-inner {
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  margin: 0 50px;
  height: 600px;
  background-color: transparent;
}

.img_out {
  position: relative;
  flex: 5;
  height: 100%;
  background-color: #fff;
  overflow: hidden;
  margin-right: 50px;
  border-radius: 15px;
}

.img {
  height: 100%;
  background: url("../assets/image/cbs.jpg") no-repeat;
  background-size: 100%;
  transition: all 1s;
  background-position: 50% 0;
}

.img:hover {
  background-size: 110%;
}

.img::after {
  content: "";
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 200px;
  background: linear-gradient(to top, #292929, transparent);
}

.bar {
  flex: 2;
  height: 100%;
  background-color: rgb(119, 136, 153);
  border-radius: 15px;
}

.scenerytitle {
  margin: 30px 20px;
  color: rgb(224, 202, 202);
}

.card {
  position: relative;
  cursor: pointer;
  float: left;
  width: 175px;
  height: 120px;
  margin: 15px 11px;
  border-radius: 5px;
  background: #000;
  font-size: 20px;
  text-align: center;
  transition:all 0.5s;
  color:transparent;
  overflow: hidden;
  
}

.card li{
  background-color: #656;
}

.card:hover{
  color: rgb(46, 19, 19);
}

.card p {
  position: absolute;
  text-align: center;
  top: 10px;
  z-index: 2;
}
</style>