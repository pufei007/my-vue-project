<template>
  <div id="app">
  <h1 v-text="title"></h1>
  <input v-model="newItems" @keyup.enter="addNew">
  <ul>
    <li v-for="item in items" :class="{finished:item.isFinished}" @click="toggleFinish(item)">{{item.label}}</li> 
  </ul>
  <component-a msgfromfather="hahahhahah" v-on:child-tell-me-something="listenToMyBoy"></component-a>
  <p>child word:{{childWords}}</p>
  </div>
</template>

<script>
import Store from './store'
import ComponentA from './components/ComponentA'
export default {
  data () {
    return {
      title: 'this is a todo list',
      items:Store.fetch(),
      newItems:'',
      childWords:''
    }    
  },
  components:{ComponentA},
  watch:{
    items:{
      handler:function(items){
        Store.save(items)
      },
      deep:true
    }
  },
  methods:{
    toggleFinish:function(item){
      item.isFinished=!item.isFinished
    },
    addNew:function(){
      this.items.push({
        label:this.newItems,
        isFinished:false
      })
      var a=this.newItems;
      this.newItems="";
      console.log(a);
    },
    listenToMyBoy:function(msg){
      this.childWords=msg;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.finished{
  color:#e43;
}
</style>
