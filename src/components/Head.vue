<template>
  <div>
        <header>
            <section> 
                <label for="title">ToDoList</label>
                <input type="text" id="title" name="title" placeholder="添加ToDo" required="required" autocomplete="off" @keyup.enter="add($event.target.value)"> 
            </section>
        </header>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
  
@Component({
  components: {
    
  },
})
export default class List extends Vue {
 
  add(prame: string):void{
    // return (event.target.value) 
    this.$store.dispatch("updateAction", prame);
  }
   
    
}
</script>
<style scoped>
header {
    height: 50px;
    background: #333;
    background: rgba(47,47,47,0.98);
}

</style>