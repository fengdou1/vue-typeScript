<template>
  <div>   
    <li v-if="featureCount.flag == false"><input  type="checkbox" @click="chooseItem()"><p id="p-1">{{featureCount.note}}</p><a >-</a></li>
    <li v-if="featureCount.flag == true"><input  type="checkbox" checked="checked" @click="chooseItem()"><p id="p-1">{{featureCount.note}}</p><a >-</a></li>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { lines } from '../types/index'; 
 
@Component
export default class ListItem extends Vue {
  
    @Prop() private row?: any;


    mounted():void{
       
    }

    // 计算属性
    get featureCount() { 
        return this.row;
    }
    
    
    chooseItem(){  
        if(this.featureCount.flag == true){ 
           this.doingThing();
        }else{
           this.undoingThing();
        }
    }
 
    @Emit()
    doingThing(){ 
        return this.featureCount;
    }
    @Emit()
    undoingThing(){ 
        return this.featureCount;
    }
}
</script>
<style scoped>
 #p-1{ 
    text-align: left;
 }
</style>