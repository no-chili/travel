<template>
  <div class="backgroundbox">
    <div class="loginbox">
      <div class="imgbox"></div>
      <div class="login">
        <div class="left" @click="change"></div>
        <div class="right">
          <div :class="classArr">
            <div class="logincard">
              <div>
                <input
                  type="text"
                  v-model="loginInfo.username"
                  placeholder="用户名"
                />
                <input
                  type="password"
                  v-model="loginInfo.password"
                  placeholder="密码"
                />
                <div class="login_b" @click="login">登录</div>
              </div>
            </div>
            <div class="registercard">
              <input
                type="text"
                v-model="registerInfo.username"
                placeholder="用户名"
              />
              <input
                type="email"
                v-model="registerInfo.email"
                placeholder="邮箱"
              />
              <input
                type="password"
                v-model="registerInfo.password"
                placeholder="密码"
              />
              <input type="password" v-model="ack" placeholder="确认密码" />
              <div class="register_b" @click="register">注册</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      flag: true,
      classArr: ["outbox"],
      loginInfo: {
        username: "",
        password: "",
      },
      registerInfo: {
        username: "",
        email: "",
        password: "",
      },
      ack: "",
    };
  },
  methods: {
    change() {
      this.flag = !this.flag;
      console.log(this.flag);
      if (this.flag == true) {
        this.classArr.pop();
      } else {
        this.classArr.push("switch");
      }
    },
    // 发起登录请求
    login() {
      if (this.loginInfo.username && this.loginInfo.password) {
        //发起网络请求
      } else {
        return alert("用户名和密码不允许为空");
      }
    },
    // 发起注册请求
    register() {
      if (
        this.registerInfo.username &&
        this.registerInfo.password &&
        this.registerInfo.email
      ) 
      {
        if (this.registerInfo.password !== this.ack) {
          return alert("两次密码不一致");
        } else {
          //发起网络请求
        }
      }else{
        return alert('注册信息不完整')
      }
    },
  },
};
</script>

<style scoped>
input {
  margin: 30px 0;
  width: 300px;
  height: 50px;
  outline: none;
  padding-left: 10px;
  font-size: 24px;
  border: none;
  border-bottom: 1px solid;
}

.backgroundbox {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("../assets/image/login.jpg") no-repeat;
  background-size: 100%;
}

.backgroundbox:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  filter: blur(5px);
  z-index: 2;
}

.loginbox {
  width: 850px;
  height: 500px;
  background: url("../assets/image/login.jpg") no-repeat;
  background-size: cover;
  z-index: 9;
}

.login {
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

.left {
  cursor: pointer;
  overflow: hidden;
  flex: 1;
  width: 50%;
}

.right {
  position: relative;
  flex: 1;
  width: 50%;
  background-color: #515a6e;
  overflow: hidden;
}

.outbox {
  height: 100%;
  position: absolute;
  top: 0;
  transition: all ease-in-out 1s;
}

.switch {
  top: -100%;
}

.logincard {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 65px;
  width: 300px;
  height: 100%;
  background-color: #515a6e;
}

.login_b {
  cursor: pointer;
  width: 70px;
  padding: 0 7px;
  margin-left: 120px;
  border-radius: 5px;
  font-size: 26px;
  font-family: fantasy;
  background-color: #515a6e;
  color: #fff;
  transition: all .5s;
}

.login_b:hover{
  background-color: #fff;
  color: #515a6e;
}

.registercard {
  margin-left: 65px;
  width: 300px;
  height: 100%;
  background-color: #515a6e;
}

.right .register_b {
  cursor: pointer;
  width: 70px;
  padding: 0 7px;
  font-size: 26px;
  margin-left: 120px;
  border-radius: 5px;
  font-family: fantasy;
  background-color:  #515a6e;
  color: #fff;
  transition: all .5s;
}

.register_b:hover{
  background-color: #fff;
  color:  #515a6e;
  
}
</style>