<template>
  <div class="user">
    <div class="idcard">
      <div class="header">
        <img
          src="http://pic1.win4000.com/wallpaper/5/594b273208eb8.jpg"
          alt=""
        />
      </div>
      <h1>{{infomation.username}}</h1>
      <div class="myinfo">
        <div class="info_item">
          <ul>
            <li>ID:{{infomation._id}}</li>
            <li>邮箱:{{infomation.email}}</li>
            <li>电话:{{infomation.phone}}</li>
            <li>地址:{{infomation.address}}</li>
          </ul>
        </div>
        <div class="info_item">
          <ul>
            <h3>想去:</h3>
            <li v-for="(item,index) in infomation.wantTO" :key="index">{{item}}</li>
          </ul>
        </div>
        <a href="https://github.com/no-chili/travel"><div class="info_item github"></div></a>
        <a href="https://no-chili.github.io/"><div class="info_item blog"></div></a>   
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return{
      infomation: {}
    }
  },
  methods: {
    // 获取个人信息
    async getInfomation() {
      const { data: res } = await this.$http.get(
        "http://localhost:8080/api/profile"
      )
      this.infomation = res;
     
    },
  },
  created() {
    this.getInfomation();
  },
};
</script>

<style scoped>
.user {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-left: 80px;
}
.idcard {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: 95%;
  background-color: rgb(111, 171, 179);
  box-shadow: 0 5px 15px;
  border-bottom: none;
}
.header {
  width: 200px;
  height: 200px;
  margin: 15px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #fff;
}
.myinfo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 1200px;
  height: 500px;
  border-radius: 20px;
}
.info_item {
  margin: 0 5px;
  width: 500px;
  height: 200px;
  background-color: rgba(68, 204, 209, 0.3);
  font-size: 16px;
  padding: 50px 50px;
  border-radius: 20px;
  overflow: auto;
}
.info_item ul {
  float: left;
}
.info_item ul li {
  margin-top: 2px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.github{
  cursor: pointer;
  background: url(../assets/svg/github.svg) no-repeat center;
  background-size: 50px;
  background-color: rgba(68, 204, 209, 0.3);
}

.blog{
  cursor: pointer;
  background: url(../assets/svg/blog.svg) no-repeat center;
  background-size: 50px;
  background-color: rgba(68, 204, 209, 0.3);
}
</style>