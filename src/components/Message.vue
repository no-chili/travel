<template>
  <div>
    <div class="message" v-if="logShow">
    <div class="log" v-for="(item,index) in logs" :key="index">
        <h1 class="title">{{item.title}}</h1>
        <h5>时间：{{item.date}}</h5>
        <h5>地点：{{item.position}}</h5>
        <div class="content">
          {{item.content}}
        </div>
        <div class="delete" @click="deletelog(item._id)">删除</div>
        <div class="update" @click="updatelog(item)">修改</div>
      </div>
    </div>
    <div class="newlog" v-if="!logShow">
        <div class="log_title"><label>title</label><input type="text" v-model="title" /></div>
        <div class="where"><label>地点</label><input type="text" v-model="position"/></div>
        <div class="logcontent">
          <textarea class="text" name="" id="" cols="60" rows="10" v-model="content"></textarea>
        </div>
        <div class="cancel" @click="logShow=!logShow">待会写</div>
        <div class="commit" @click="addlog">写完了</div>
      </div>
      <div class="add" @click="logShow=!logShow"></div>
  </div>
</template>

<script>
export default {
  name: "Message",
  data(){
    return{
      logShow:true,
      title:'',
      content:'',
      date:'',
      position:'',
      model:'',
      logs:[],
      id:''
    }
  },
  methods:{
    //改
    async updatelog(val){
      this.logShow=!this.logShow
      this.id=val._id
      this.title=val.title
      this.content=val.content
      this.position=val.position
      this.model='update'
    },
    //写
    async addlog(){
      this.logShow=!this.logShow
      if(this.model=='update'){
        const{data:res} = await this.$http.post('http://localhost:8080/api/updatelog',{
        _id:this.id,
        title:this.title,
        content:this.content,
        date:new Date(),
        position:this.position
      })
      if(res.status!==200){
        this.model=''
        return alert(res.message)
      }
      this.model=''
      this.getlog()
      return alert(res.message)
      }

      const{data:res}= await this.$http.post('http://localhost:8080/api/newlog',{
        title:this.title,
        content:this.content,
        date:new Date(),
        position:this.position
      })
      if(res.status!==200){
        return alert(res.message)
      }
      this.getlog()
      return alert(res.message)
    },
    //删
    async deletelog(val){
      const{data:res} = await this.$http.post('http://localhost:8080/api/deletelog',{
        _id:val
      })
      if(res.status!==200){
        return alert(res.message)
      }
      this.getlog()
      return alert(res.message)
      
    },
    //查
    async getlog(){
      const {data:res}=await this.$http.get('http://localhost:8080/api/getlog')
      this.logs=res.logs
    }
  },
  created(){
    this.getlog()
  }
};
</script>

<style scoped>
.message {
  display: flex;
  overflow: auto;
  padding-top: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: rgb(119, 190, 199);
  margin-left: 80px;
}
.log {
  position: relative;
  padding:30px;
  width: 1000px;
  border-radius: 20px;
  background-color: #fff;
  margin: 20px 0;
  transition: all 0.5s;
}
.delete{
  cursor: pointer;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  line-height: 50px;
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background-color: #666;
  z-index: 99;
  transition: all 0.5s;
}
.update{
  cursor: pointer;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background-color: #666;
  z-index: 99;
  transition: all 0.5s;
}

.log:hover{
  box-shadow: 0 5px 15px;
}

.delete:hover,.update:hover{
  opacity: 1;
}

.title {
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  text-indent: 2em;
}
.add {
  position: absolute;
  bottom: 0;
  right: 10%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin: 15px;
  border-radius: 5px;
  transition: all 0.5s;
  background: url(../assets/svg/编辑.svg) no-repeat center;
  background-color: #fff;
  background-size: 25px;
}
.add:hover {
  background-color: rgb(226, 224, 224);
  box-shadow: 0 5px 15px;
}
.newlog {
  position: absolute;
  top: 0;
  left: 20%;
  font-size: 20px;
  width: 1000px;
  height: 100%;
  background-color: #fff;
  z-index: 9;
}

.log_title,
.where {
  text-align: center;
  margin: 50px;
}
.log_title input,
.where input {
  text-align: center;
  width: 50%;
  height: 50px;
  font-size: 20px;
  outline: none;
  border: none;
  border-bottom: 1px solid;
}

.logcontent {
  text-align: center;
}
.logcontent textarea {
  outline: none;
  width: 800px;
  height: 500px;
  text-indent: 2em;
  padding: 15px;
  resize: none;
}
.cancel {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 15px solid rgb(113, 174, 182);
  width: 100px;
  height: 100px;
  font-size: 20px;
  background-color: rgb(255, 255, 255);
  text-align: center;
  line-height: 80px;
  transition: all 0.5s;
}
.commit {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 15px solid rgb(113, 174, 182);
  width: 100px;
  height: 100px;
  font-size: 20px;
  background-color: rgb(255, 255, 255);
  text-align: center;
  line-height: 80px;
  transition: all 0.5s;
}

.cancel:hover,
.commit:hover {
  background-color: rgb(230, 230, 230);
}

.show {
  display: block;
}
</style>