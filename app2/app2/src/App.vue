<template>
  <div id="app">

    <div id="nav">
      <router-link to="/all">全部</router-link> |
      <router-link to="/active">未完成</router-link> |
      <router-link to="/complete">已完成</router-link>
    </div>      
    <TodoInput/>
    <div >
      <!-- <TodoListItem v-for="(index) in todoIndex" :key="index" :index="index"/> -->
    </div>
    <router-view />
  </div>
</template>



<script>
import TodoInput from '@/components/TodoInput/index.vue'
//import TodoListItem from '@/components/TodoListItem/index.vue'
export default {
  components:{
   TodoInput,//TodoListItem
  },
    computed:{
      todoIndex(){
        return this.$store.getters['todoIndex']
      }
    },
    mounted(){
      this.$store.dispatch('INIT_TODOS')
    }
}
</script>

<style src="./assets/style.css">
</style>
