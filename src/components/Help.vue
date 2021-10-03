<template>
  <div class="message">
    <h1 class="t_title" @click="gotoUser">TRAVEL</h1>
    <div class="title">
      <div class="tiandi">见天地,</div>
      <div class="zhongsheng">见众生,</div>
      <div class="ziji">见自己</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Help",
  methods:{
    gotoUser(){
      this.$router.push('/user')
    }
  }
};
</script>

<style scoped>
.message {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(119, 190, 199);
  margin-left: 80px;
  flex-direction: column;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 200px;
  /* background-color: #fff; */
  font-size: 50px;
  animation: travel 3s forwards;
  animation-delay: 9s;
  overflow: hidden;
}
.title .tiandi {
  animation: title 3s forwards;
  animation-delay: 0s;
  opacity: 0;
}
.title .zhongsheng {
  animation: title 3s forwards;
  animation-delay: 3s;
  opacity: 0;
}
.title .ziji {
  animation: title 3s forwards;
  animation-delay: 6s;
  opacity: 0;
}
.t_title{
  cursor: pointer;
  transition: all 0.6s;
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
</style>