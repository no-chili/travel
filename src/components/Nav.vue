<template>
  <div class="container">
    <div class="navigation">
      <ul>
        <li>
          <a href="http://localhost:8080/#/">
            <span class="icon"><i class="bx bxs-home-smile"></i></span>
            <span class="title">Home</span>
          </a>
        </li>
        <li>
          <a href="http://localhost:8080/#/user">
            <span class="icon"><i class="bx bxs-user"></i></span>
            <span class="title">User</span>
          </a>
        </li>
        <li>
          <a href="http://localhost:8080/#/message">
            <span class="icon"
              ><i class="bx bxs-message-square-detail"></i
            ></span>
            <span class="title">Message</span>
          </a>
        </li>
        <li>
          <a href="http://localhost:8080/#/help">
            <span class="icon"><i class="bx bxs-help-circle"></i></span>
            <span class="title">Help</span>
          </a>
        </li>
        <li>
          <a href="http://localhost:8080/#/setting">
            <span class="icon"><i class="bx bxs-message-alt-add"></i></span>
            <span class="title">Setting</span>
          </a>
        </li>
        <li>
          <a href="http://localhost:8080/#/password">
            <span class="icon"><i class="bx bxs-key"></i></span>
            <span class="title">Password</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon"><i class="bx bxs-log-out"></i></span>
            <span class="title">Sign-Out</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
.container {
float: left;
  height: 100%;
  position: absolute;
  background-color: rgb(218, 127, 127);
}
.navigation {
  position: relative;
  width: 80px;
  height: 100%;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
.navigation:hover{
     width: 300px;
}
.container .navigation .ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.container .navigation ul li {
  position: relative;
  width: 100%;
}
.container .navigation ul li:hover {
  cursor: pointer;
  background: #efefef;
}
.container .navigation ul li a {
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: #6843d1;
  color: rgb(113, 174, 182);
  font-weight: 500;
  height: 60px;
  line-height: 60px;
}
.icon{
     position: relative;
        display: block;
        min-width: 80px;
        height: 60px;
        top: 10%;
        line-height: 60px;
        text-align: center;
}
.bx{
    font-size: 25px;
}
   .container .navigation ul li a .title {
        position: relative;
        display: block;
        height: 60px;
        line-height: 60px;
        white-space: nowrap;
    }
</style>