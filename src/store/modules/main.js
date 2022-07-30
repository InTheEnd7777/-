export const todomain={
  
    namespaced:true,
    state:{
        list:  [
            {
              name: '吃饭',
              done: false,
              id: 1,
            },
            {
              name: '睡觉',
              done: false,
              id: 2,
            },
            {
              name: '打豆豆',
              done: false,
              id: 3,
            },
          ]
    },
    getters: {
      todomain(state){
        console.log(state);
        console.log(state.todomain.list);
        return state.todomain.list
      }
    },
    mutations: {
        //删除
        dellist(state,payload){
            state.list.splice(payload,1);
        },
        //添加
        addlist(state,payload){
       const item={}
       item.name=payload
       item.done=false;
       item.id=state.list.id+1
       state.list.push(item);
        }
    },
    actions: {
        delitem(context,payload){
            context.commit('dellist',payload)
        },
        additem(context,payload){
            context.commit('addlist',payload)
        }
    },
}
