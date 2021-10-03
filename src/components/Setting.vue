<template>
  <div class="setting">
    <div class="setting_info">
      <ul class="personinfo">
        <li>
          UserName:<input type="text">
        </li>
        <li>
          Adress:<input type="text">
        </li>
        <li>
          Email:<input type="text">
        </li>
        <li>
          UserName:<input type="text">
        </li>
        <li>
          UserName: <input type="text">
        </li>
      </ul>
      <div class="sure">
        保存
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:'Setting'
}
</script>

<style scoped>
  .setting{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 80px;
    height: 100vh;
  }
  .setting_info{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 500px;
    background-color: #fff;
  }
  .personinfo{
    font-size: 20px;
  }
  .personinfo li{
    margin: 25px;
  }
   .personinfo input{
     outline: none;
     border: none;
     border-bottom: 1px solid ;
   }
   .sure{
     cursor: pointer;
     position:absolute;
     top: 100%;
     transform: translate(0,-50%);
     border-radius: 50%;
     border:  15px solid rgb(113, 174, 182);
     width: 100px;
     height: 100px;
     background-color: rgb(255, 255, 255);
     text-align: center;
     font-size: 25px;
     line-height: 80px;
     transition: all .5s;
   }
   .sure:hover{
     background-color: rgb(211, 211, 211);
   }
</style>