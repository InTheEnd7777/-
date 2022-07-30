import Vue from 'vue'
import Vuex from 'vuex'
import {todomain} from './modules/main'
import {todofooter} from './modules/footer'
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
 
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todomain,todofooter
  },
  plugins:[
    createVuexPersisted({
      reducer(state){
        return{
          todomain:state.todomain
        }
      }
    })
  ]
  
})
