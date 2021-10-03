<template>
    <div class="background">
        <Nav/>
        <router-view></router-view>
    </div>
</template>

<script>
import Nav from '../components/Nav'
    export default {
        name:'Mylog',
        components:{
            Nav
        }
    }
</script>

<style scoped>
.background{
    width: 100%;
    height: 100vh;
    background-color: rgb(113, 174, 182);
}
</style>