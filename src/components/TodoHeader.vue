<template>
  <header class="header">
    <h1 :style="{color:color}"> todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" >
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="obj"
      @keyup.enter="upenter"
    />
  </header>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapActions}=createNamespacedHelpers('todomain')
const {mapState}=createNamespacedHelpers('todofooter')
export default {
data() {
  return {
    obj:''
  }
},
computed:{
  ...mapState(['color'])

},
methods: {
  upenter(){
    if(this.obj.length===0) return alert('请输入内容')
    this.additem(this.obj)
    this.obj=''

  },
  ...mapActions(['additem']),
},

}
</script>
