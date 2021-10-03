<template>
  <div class="paddingright">
      <div class="setpassword">
          <div class="seting">
              <div class="divforpassword"><label for="passwordinput_set1">请输入原密码:</label><input class="passwordinput_set" id="passwordinput_set1" type="text"></div>
              <div class="divforpassword"><label for="passwordinput_set2">请输入新密码:</label><input class="passwordinput_set" id="passwordinput_set2" type="password"></div>
              <div class="divforpassword"><label for="passwordinput_set3">请确认新密码:</label><input class="passwordinput_set" id="passwordinput_set3" type="password"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name:'Password'
}
</script>

<style>
.paddingright{
    padding-left: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.setpassword{
    position: relative;
    text-align: center;
    width: 800px;
    height: 500px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 5px 15px;
}
.divforpassword label{
    font-size: 16px;
} 
.passwordinput_set{
    margin: 50px;
    width: 500px;
    height: 50px;
    outline: none;
    padding: 0 15px;
    border: none;
    border-bottom: 1px solid;
}

.setpassword::after{
    position: absolute;
    top: 50%;
    right: 0;
    content: '确认';
    cursor: pointer;
    width: 100px;
    height: 100px;
    border-radius:50% ;
    transform:translate(50%,-50%);
    background-color: rgb(255, 255, 255);
    border: 20px solid  rgb(113, 174, 182);
    text-align: center;
    line-height: 55px;
    font-size: 25px;
    z-index: 99;
}


</style>