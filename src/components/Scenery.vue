<template>
  <div class="scenery">
    <Header />
    <!-- 搜索 -->
    <div class="search">
      <div class="inputinfo">
        <input class="input" v-model="key" type="text" />
      </div>
      <div class="searchicon" @click="search">
        <Icon type="md-search" size="50" />
      </div>
    </div>
    <!-- 展示区域 -->
    <div class="body_inner">
      <Card :it="result" />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Card from "../components/Card.vue";
export default {
  name: "Scenery",
  components: {
    Header,
    Card,
  },
  data() {
    return {
      key: "",
      result: [],
    };
  },
  methods: {
    async search() {
      const { data: res } = await this.$http.post(
        "http://localhost:8080/api/search",
        {
          key: this.key,
        }
      );
      this.result = res;
      console.log(res);
    },
  },
};
</script>

<style scoped>
.scenery {
  background-color: rgb(255, 255, 255);
}
.search {
  width: 800px;
  height: 50px;
  margin: 10px auto;
  border: none;
}
.inputinfo {
  float: left;
  width: 750px;
  height: 100%;
  background-color: rgb(113, 174, 182);
}
.input {
  width: 100%;
  height: 100%;
  outline: none;
  padding: 20px;
  background-color: rgb(113, 174, 182);
  color: #fff;
  font-size: 20px;
}
.searchicon {
  float: left;
  width: 50px;
  height: 100%;
  background-color: #396;
  transition: all 0.6s;
}
.searchicon:hover {
  color: rgb(230, 216, 216);
}
.body_inner {
  padding-left: 50px;
  /* background: rgb(124, 0, 0); */
}
</style>