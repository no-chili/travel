<template>
  <div class="message">
    <div class="leaf">
      <div class="leafsvg" v-for="(item,index) in leaf" :key="index" :style="item"></div>
      <div class="snowsvg" v-for="(item,index) in snow" :key="'@'+index" :style="item"></div>
    </div>
    <h1 class="t_title" @click="gotoUser">TRAVEL</h1>
    <div class="title">
      <div class="tiandi">见自己,</div>
      <div class="zhongsheng">见天地,</div>
      <div class="ziji">见众生</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Help",
  data(){
    return{
      leaf:[],
      snow:[]
    }
  },
  methods:{
    //跳转用户主页
    gotoUser(){
      this.$router.push('/user')
      location.reload()
    },
    //生成雪花和落叶
    grow(){
      let i=0;
      while(i<35){
        this.leaf.push({
          left:Math.random()*2000+"px",
          transform: `rotate(${Math.ceil(Math.random()*900)}deg)`,
          'animation-duration':Math.ceil(Math.random()*50)+6+'s',
          'animation-delay':Math.ceil(Math.random()*5)+'s' 
        })
        this.snow.push({
          left:Math.random()*1500+"px",
          'animation-duration':Math.ceil(Math.random()*30)+5+'s',
          'animation-delay':Math.ceil(Math.random()*5)+'s' 
        })
        i++;
      }
      console.log(this.leaf);
      console.log(this.snow);
    }
  },
  created(){
    this.grow()
  }
};
</script>

<style scoped>

.message {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(119, 190, 199);
  flex-direction: column;
}
.leaf{
 top: 0;
 position: absolute;
 z-index: 0;
 width: 100%;
 height: 500px; 
 background:linear-gradient(to bottom,rgb(103, 168, 177),rgb(119, 190, 199));
}

.leafsvg{
  position: absolute;
  top: -60px;
  width: 50px;
  height: 50px;
  background: url(../assets/svg/叶子3.svg) no-repeat center;
  background-size: 35px;
  z-index: 55;
  transform-origin:20% 50%;
  animation: fall 15s infinite linear,fealrotate 5s infinite ease-in-out;
}
.snowsvg{
  top: -60px;
  position: absolute;
  width: 50px;
  height: 50px;
  background: url(../assets/svg/雪花.svg) no-repeat center;
  background-size: 35px;
  z-index: 55;
  animation: fall 15s infinite linear,rotate 15s infinite;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 200px;
  font-size: 50px;
  animation: travel 3s forwards;
  animation-delay: 4.5s;
  overflow: hidden;
}
.title .tiandi {
  animation: title 1.5s forwards;
  animation-delay: 0s;
  opacity: 0;
}
.title .zhongsheng {
  animation: title 1.5s forwards;
  animation-delay: 1.5s;
  opacity: 0;
}
.title .ziji {
  animation: title 1.5s forwards;
  animation-delay: 3s;
  opacity: 0;
}
.t_title{
  cursor: pointer;
  transition: all 0.6s;
  animation:t_travel 3s forwards;
  animation-delay: 7.5s;
}
.t_title:hover{
  background-color: #fff;
}

@keyframes title {
  0% {
    margin-bottom: 1000px;
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    margin-top: 0;
    opacity: 1;
  }
}
@keyframes travel {
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0;
    height: 200px;
  }
  100%{
    height: 0;
    opacity: 0;
  }
}

@keyframes t_travel {
  40%{
    transform: rotate(-15deg);
  }
  80%{
    transform: rotate(15deg);
  }
  100%{
    transform: rotate(0deg);
  }
}

@keyframes fall{
  0%{
    top: -50px;
  }
  100%{
    opacity: 0;
    top: 500px;
  }
}

@keyframes rotate {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(720deg);
  }
}

@keyframes fealrotate{
  0%{
    
  }
  100%{
    transform: rotate(55deg);
  }
}
</style>