<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{ completed: item.isDone }"  v-for="item in list" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.isDone" />
        <label>{{item.name}}</label>
        <button class="destroy" @click="del(item.id)"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapState,mapActions}=createNamespacedHelpers('todomain')
export default {
  data() {
    return {
    }
  },  
  created() {
  },
  methods: {
  del(id){
      this.delitem(id)
  },
   ...mapActions(['delitem'])
  },
  computed:{
...mapState(['list'])
  }
}
</script>
