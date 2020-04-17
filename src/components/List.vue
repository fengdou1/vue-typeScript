<template>
  <div>
    <section>
      <h2>正在进行 <span id="todocount">{{doing.length}}</span></h2>
      <ol id="todolist" class="demo-box">  
        <ListItem v-for="item in doing" :key="item.id" :row="item" @undoing-thing="doingthing"/> 
      </ol>
      <h2>已经完成 <span id="donecount">{{undoing.length}}</span></h2>
      <ul id="donelist">
         <ListItem v-for="item in undoing" :key="item.id" :row="item" @doing-thing="undoingthing"/> 
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'; 
import { lines, result } from '../types/index'; 
import ListItem  from './ListItem.vue';




@Component({
  components: {
    ListItem
  },
})
export default class List extends Vue {
  
    // private doing : lines[] =  [];   // 渲染数据
    // private undoing : lines[] =  [];   // 渲染数据
 
    async created(){ 
      // await this.$store.dispatch("getData");
     
      // const result = this.$store.state.datas;
      // this.doing = result.doing;
      // this.undoing = result.undoing; 
    }

    get doing(): lines[]{
      const result = this.$store.state.datas;
      return result.doing;
    }

    get undoing(): lines[]{
      const result = this.$store.state.datas;
      return result.undoing; 
    }

    doingthing(row : lines):void{ 
      row.flag = true;
      
      let index = this.doing.findIndex((item)=>{
        return item.id == row.id;
      }) 
      this.doing.splice(index,1);
      this.undoing.push(row);
    }

    undoingthing(row : lines):void{ 
      row.flag = false;
      let index = this.undoing.findIndex((item)=>{
        return item.id == row.id;
      }) 
      this.undoing.splice(index,1); 
      this.doing.push(row);
    }
}
</script>
<style scoped>
h2{
  display: flex;
}
</style>