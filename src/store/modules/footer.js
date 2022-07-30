export const todofooter={
namespaced:true,
state: 
  {color:''},
  
  getters: {
  },
  mutations: {
    change(state,payload){
      state.color = payload
      console.log(state.color);
    }
  },
  actions: {
    changeFontColor(context,payload){
      context.commit('change',payload);
    }
  },
}