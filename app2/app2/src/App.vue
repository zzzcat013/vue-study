<template>
  <div id="app">

    <div id="nav">
      <router-link to="/all">全部</router-link> |
      <router-link to="/active">未完成</router-link> |
      <router-link to="/complete">已完成</router-link>
    </div>      
    <TodoInput/>

    <router-view />
  </div>
</template>



<script>
import TodoInput from '@/compontents/TodoInput/index.vue'

export default {
  compontents:{
   TodoInput
  },
    computed:{
      todoIndex(){
        return this.$store.getters('todoIndex')
      }
    },
    mounted(){
      this.$store.dispatch('INIT_TODOS')
    }
}
</script>



<style src="./assets/style.css">
</style>
