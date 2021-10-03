<template>
  <div>
    <div class="message">
      <div class="log">
        <h1 class="title">123</h1>
        <h5>时间：</h5>
        <h5>地点：</h5>
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          quas possimus delectus dolore culpa sed non, modi ipsam, suscipit,
          pariatur illo libero. Minus, fuga doloribus explicabo vero sint
          debitis eaque, eos quod fugiat nam tempore quo provident iure commodi
          error distinctio aut tempora. Consequuntur ducimus enim libero amet
          non quas. Dolores voluptates adipisci commodi! Magnam?
        </div>
        <div class="delete">删除</div>
        <div class="update">修改</div>
      </div>
       <div class="log">
        <h1 class="title">123</h1>
        <h5>时间：</h5>
        <h5>地点：</h5>
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          quas possimus delectus dolore culpa sed non, modi ipsam, suscipit,
          pariatur illo libero. Minus, fuga doloribus explicabo vero sint
          debitis eaque, eos quod fugiat nam tempore quo provident iure commodi
          error distinctio aut tempora. Consequuntur ducimus enim libero amet
          non quas. Dolores voluptates adipisci commodi! Magnam?
        </div>
        <div class="delete">删除</div>
        <div class="update">修改</div>
      </div>
      <div class="add">写笔记</div>
      <div class="newlog">
        <div class="log_title"><label>title</label><input type="text" /></div>
        <div class="where"><label>地点</label><input type="text" /></div>
        <div class="logcontent">
          <textarea class="text" name="" id="" cols="60" rows="10"></textarea>
        </div>
        <div class="cancel">待会写</div>
        <div class="commit">写完了</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
};
</script>

<style scoped>
.message {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: rgb(119, 190, 199);
  margin-left: 80px;
}
.log {
  position: relative;
  padding: 15px;
  width: 1000px;
  border-radius: 20px;
  background-color: #fff;
  margin: 15px 0;
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
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  text-indent: 2em;
}
.add {
  cursor: pointer;
  width: 50px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #fff;
  margin-top: 15px;
  border-radius: 5px;
  transition: all 0.5s;
}
.add:hover {
  background-color: rgb(226, 224, 224);
  box-shadow: 0 5px 15px;
}
.newlog {
  display: none;
  position: relative;
  position: absolute;
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