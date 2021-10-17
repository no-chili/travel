<template>
<div>
  <div class="card" v-for="(item,index) in it" :key="index" @click="gotoInfo(item.name)">
    <div class="sceneryimg">
        <img :src="item.sceneryImgUrl[0]?item.sceneryImgUrl[0]:'https://pica.zhimg.com/80/v2-798dc758dbe699ca40a410fc93d7717f_720w.jpg?source=1940ef5c'">
    </div>
    <h2>{{item.name}}</h2>
    <p class="sceneryinfo">
      {{item.infomation}}
    </p>
  </div>
</div> 
</template>

<script>
export default {
  name: "Card",
  props:["it"],
  methods:{
    gotoInfo(value){
      console.log(value);
      window.localStorage.setItem('sceneryName',value)  
      this.$router.push('/sceneryinfo').catch(() =>{})
    }
  }
};
</script>

<style scoped>
.card {
  cursor: pointer;
  /* float: left; */
  display: inline-block;
  margin: 20px 18.5px;
  width: 200px;
  height: 250px;
  border-radius: 10px 10px;
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