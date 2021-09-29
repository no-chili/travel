<template>
  <div class="card"  @click="gotoInfo">
    <div class="sceneryimg">
        <img src="../assets/image/长白山.jpg" alt="">
    </div>
    <h2>凤阳山</h2>
    <p class="sceneryinfo">
      凤阳山，位于浙江龙泉东南50公里处，面积23平方公里，江浙第一高峰，保护区内植物资源极为丰富，其中白豆杉、华东黄杉、长柄双花木等20余种被列入《中国珍稀濒危保护植物名录》，野生动物众多，有云豹、苏门羚、黄腹角雉、赤腹鹰等，其中国家一级保护动物9种。素有“清凉天地”、“天然公园”之美誉的凤阳山，是休闲度假、旅游避暑的好去处，极端最高气温只在30.2度。保护区内有景点近百处，其中江浙第一高峰――黄茅尖，海拔1929米；瓯江发源地――龙渊峡；全省海拔最高的人工湖――凤阳湖；世界香菇文化遗址――凤阳庙，以及小黄山，双折瀑布等，都是旅游胜地。
    </p>
  </div>
</template>

<script>
export default {
  name: "Card",
  methods:{
    gotoInfo(){
      this.$router.push('/sceneryinfo')
    }
  }
};
</script>

<style scoped>
.card {
  cursor: pointer;
  float: left;
  margin: 20px 18.5px;
  width: 200px;
  height: 250px;
  border-radius: 10px 10pa 0 0;
  background-color: rgb(119, 190, 199);
  text-align: center;
  color: rgb(231, 225, 228);
  transition: all 0.5s;
  overflow: hidden;
}
.sceneryimg {
    position: relative;
  width: 100%;
  height: 150px;
  border-radius: 15px 15px;
  background-size: cover;
  background-color: rgb(119, 190, 199);
  overflow: hidden;
}
.sceneryinfo {
  text-indent: 2em;
  width: 100%;
  height: 100px;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.card:hover{
  color: #333;
}
</style>