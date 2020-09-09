<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div>
      <h2>当前计数：{{counter}}</h2>
      <button @click="add">+</button>
      <input type="text" v-model="counter">
      <button @click="count">-</button>
    </div>-->
    <div class="header1">
      <h1>小黑记事本</h1>
      <input
        type="autofouces"
        autocomplete="off"
        @keyup.enter="add"
        placeholder="请输入任务"
        v-model="inputvalue"
        required="required"
      />
      <div>
        <ul>
          <li v-for="(item,index) in list" :key="index" class="disblock">
            <span>{{index}}</span>
            <label>{{item}}</label>
            <button class="destory" @click="deleteData(index)">X</button>
          </li>
        </ul>
        <span v-if="list.length != 0">数据有{{list.length}}条</span>
        <button  v-if="list.length != 0" @click="clear()">clear</button>
      </div>
    </div>
  </div>


  <!-- axios.get(地址？key=value&key2=values).then(function{response},function(err){reject}) -->
  <!-- axios.post(地址，{key：value，key2：value2}).then(function{response},function(err){reject}) -->
</template> 

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      counter: 0,
      list: ["写代码", "吃饭饭", "睡觉觉"],
      inputvalue: "好好学习，天天向上",
    };
  },
  methods: {
    add() {
      this.list.push(this.inputvalue);
    },
    count() {
      this.counter--;
    },
    deleteData(index){
      console.log(index)
      this.list.splice(index,1)
    },
    clear(){
      console.log("清空")
      this.list= []
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.disblock {
  display: block;
}
.destory {
  position: absolute;
  width: 16px;
  height: 16px;
  margin: 3px 5px 0 10px;
  outline: none;
  line-height: 16px;
}
</style>
