<template>
  <div class="backgroundbox">
    <div class="loginbox">
      <div class="imgbox"></div>
      <div class="login">
        <div class="left"></div>
        <div class="right">
          <div class="outbox">
              <div class="logincard">
            <div>
              <input type="text" placeholder="用户名" />
              <input type="text" placeholder="密码" />
              <div class="loginbtn">登录</div>
            </div>
          </div>
          <div class="registercard">
            <input type="text" placeholder="用户名" />
            <input type="text" placeholder="邮箱" />
            <input type="text" placeholder="密码" />
            <input type="text" placeholder="确认密码" />
            <div class="registerbtn">注册</div>
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
  transition: all 2s;
}

.login {
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

.left {
  flex: 1;
  width: 50%;
}

.right {
    position: relative;
  flex: 1;
  width: 50%;
  background-color: rgb(123, 141, 119);
}

.outbox{
    height: 100%;
    position: absolute;
    top:0;
    transition: all ease-in-out 1s;
}

.outbox:hover{
    top: -100%;
}

.logincard {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 65px;
  width: 300px;
  height: 100%;
  background-color: #555;
}

.loginbtn {
  width: 70px;
  padding: 0 7px;
  margin-left: 120px;
  border-radius: 5px;
  font-family: fantasy;
  background-color: #fff;
}

.registercard {
  margin-left: 65px;
  width: 300px;
  height: 100%;
  background-color: rgb(226, 182, 182);
}

.registerbtn {
  width: 70px;
  padding: 0 7px;
  margin-left: 120px;
  border-radius: 5px;
  font-family: fantasy;
  background-color: #fff;
}
</style>