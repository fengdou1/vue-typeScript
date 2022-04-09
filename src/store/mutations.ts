import {DataFrom } from "./data";


export let mutations =  { 
    updateValue(state: any, value: string) { 
      state.datas.doing.push({ id:Math.random(), note: value, flag: false }); 
      DataFrom.doing.push({ id:Math.random(), note: value, flag: false }); 
    },
    updateData(state: any, data: string){
      state.datas = data; 
    }
}