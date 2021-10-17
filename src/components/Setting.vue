<template>
  <div class="setting">
    <div class="setting_info">
      <ul class="personinfo">
        <li>UserName:<input v-model="username" type="text" /></li>
        <li style="margin-left: 60px">
          Adress:<input v-model="address" type="text" />
        </li>
        <li style="margin-left: 70px">
          Email:<input v-model="email" type="text" />
        </li>
        <li style="margin-left: 60px">
          Phone:<input v-model="phone" type="text" />
        </li>
        <li style="margin-left: -10px">
          Head portrait:<input
            @change="changhead"
            style="width: 270px"
            type="file"
            accept="image/gif, image/jpeg, image/png, image/jpg"
          />
        </li>
      </ul>
      <div class="sure" @click="save">保存</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Setting",
  data() {
    return {
      username: "",
      address: "",
      email: "",
      phone: "",
      headph: {
        data:''
      },
      agree:true
    };
  },
  methods: {
    //改变图片
    changhead(e) {
      this.agree=true
      if(e.target.files[0].size>100*1024){
        this.agree=false
        return alert("图片过大,不能上传")
      }
      // this.headph = e.target.files[0];
      console.log(this.headph);
      let that = this;
      let reader = new FileReader();
      console.log(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener('load', function () {
        that.headph.data = this.result;
        console.log(that.headph);
      });
    },
    //保存修改
    async save() {
      if(this.agree==true){
        const { data: res } = await this.$http.post(
        "http://localhost:8080/api/setting",
        {
          username: this.username,
          address: this.address,
          email: this.email,
          phone: this.phone,
          headph: this.headph,
        }
      );
      alert(res.message);
      }
    },
    // 获取个人信息
    async getInfomation() {
      const { data: res } = await this.$http.get(
        "http://localhost:8080/api/profile"
      );
      (this.email = res.email),
        (this.address = res.address),
        (this.username = res.username),
        (this.phone = res.phone);
    },
  },
  created() {
    this.getInfomation();
  },
};
</script>

<style scoped>
input {
  padding: 0 15px;
}
.setting {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 80px;
  height: 100vh;
}
.setting_info {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 500px;
  background-color: #fff;
  box-shadow: 0 9px 25px;
}
.personinfo {
  font-size: 20px;
}
.personinfo li {
  margin: 25px;
}
.personinfo input {
  outline: none;
  border: none;
  border-bottom: 1px solid;
}
.sure {
  cursor: pointer;
  position: absolute;
  top: 100%;
  transform: translate(0, -50%);
  border-radius: 50%;
  border: 15px solid rgb(113, 174, 182);
  width: 100px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  text-align: center;
  font-size: 25px;
  line-height: 70px;
  transition: all 0.5s;
}
.sure:hover {
  background-color: #999;
  color: #fff;
  box-shadow: 0 5px 15px #000;
}
</style>