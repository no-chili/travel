<template>
  <div class="scenery">
        <Header/>
       <div class="search">
         
       </div>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
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
  }
</style>