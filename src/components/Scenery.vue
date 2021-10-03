<template>
  <div class="scenery">
        <Header/>
       <div class="search">
         <div class="inputinfo">
           <input class="input" type="text">
         </div>
         <div class="searchicon">
           <Icon type="md-search" size="50"/>
           </div> 
       </div>
       <div class="body_inner">
         <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Card from '../components/Card.vue'
export default {
    name:'Scenery',
    components:{
      Header,
      Card
    }
}
</script>

<style scoped>
  .scenery{
    background-color: #fff;
    width: 100%;
    height: 100vh;
  }
  .search{
    width: 800px;
    height: 50px;
    margin: 10px auto;
    border: none;
  }
  .inputinfo{
    float: left;
    width: 750px;
    height: 100%;
    background-color: rgb(113, 174, 182);
  }
  .input{
    width: 100%;
    height: 100%;
    outline: none;
    padding: 20px;
    background-color: rgb(113, 174, 182);
    color: #fff;
    font-size: 20px;
  }
  .searchicon{
    float: left;
    width: 50px;
    height: 100%;
    background-color: #396;
    transition: all .6s;
  }
    .searchicon:hover{
      color: rgb(230, 216, 216);
    }
  .body_inner{
    margin-left: 50px;
  }
</style>