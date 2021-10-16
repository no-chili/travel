<template>
  <header>
      <nav>
        <a href="http://localhost:8080/#/"><span @click="gotoHome">HOME</span></a>
        <span></span>
        <a href="http://localhost:8080/#/mylog"><span @click="gotoMyLog">MYLOG</span></a>
      </nav>
    </header>
</template>

<script>
export default {
    name:'Header',
    methods:{
      gotoHome(){      
      },
      gotoMyLog(){
      }
    }
}
</script>

<style scoped>
a{
  color: #ddd;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  width: 100vw;
  height: 100px;
  background-color:rgb(113, 174, 182);
  box-shadow: 0 3px 10px;
  margin-bottom: px;
}

header nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 26px;
}

</style>