<template>
  <div class="paddingright">
    <div class="setpassword">
      <div class="seting">
        <div class="divforpassword">
          <label for="passwordinput_set1">请输入原密码:</label
          ><input
           v-model="oldpassword"
            class="passwordinput_set"
            id="passwordinput_set1"
            type="text"
          />
        </div>
        <div class="divforpassword">
          <label for="passwordinput_set2" >请输入新密码:</label
          ><input
          v-model="newpassword"
            class="passwordinput_set"
            id="passwordinput_set2"
            type="password"
          />
        </div>
        <div class="divforpassword">
          <label for="passwordinput_set3">请确认新密码:</label
          ><input
          v-model="sure"
            class="passwordinput_set"
            id="passwordinput_set3"
            type="password"
          />
        </div>
        <div class="sure" @click="submit">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Password",
  data() {
    return {
        oldpassword:'',
        newpassword:'',
        sure:''
    }
  },
  methods:{
      //修改密码
      async submit(){
          if(this.oldpassword&&this.newpassword&&this.sure){
              if(this.newpassword==this.sure){
                  //提交请求
                   const{data:res}=await this.$http.post('http://localhost:8080/api/password',{
                        oldpassword:this.oldpassword,
                        newpassword:this.newpassword
                    })
                    alert(res.message)
              }else{
                  alert('两次密码不一致')
              }
          }else{
              alert('未填写完整信息')
          }
      }
  }
};
</script>

<style scoped>
.paddingright {
  padding-left: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.setpassword {
  position: relative;
  text-align: center;
  width: 800px;
  height: 500px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 5px 15px;
}
.divforpassword label {
  font-size: 16px;
}
.passwordinput_set {
  margin: 50px;
  width: 500px;
  height: 50px;
  outline: none;
  padding: 0 15px;
  border: none;
  border-bottom: 1px solid;
}

.sure {
  position: absolute;
  top: 50%;
  right: 0;
  content: "确认";
  cursor: pointer;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: translate(50%, -50%);
  background-color: rgb(255, 255, 255);
  border: 20px solid rgb(113, 174, 182);
  text-align: center;
  line-height: 55px;
  font-size: 25px;
  transition: all 0.5s;
  z-index: 99;
}
.sure:hover {
  background-color: #999;
  color: #fff;
  box-shadow: 0 5px 15px #000;
}
</style>