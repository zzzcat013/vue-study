import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    day:"1",
    list:[]
  },
  mutations: {
    SETDAY(state,day){
      state.day=day
    },
    SETLIST(state,list){
      state.list=list
    }

  },
  actions: {
    GETLIST(context,day){
      //console.log("context",context,day)
      context.commit("SETDAY",day)
      axios.get("../../static/db.json").then((res)=>{
          context.commit("SETLIST",res.data)
      })
    }
  },
  modules: {
  }
})
