import Vue from 'vue';
import Vuex from 'vuex';
import { lines, result } from '../types/index'; 
Vue.use(Vuex);

let DataFrom = {
  doing:[
    { id: 1, note: '上海市普陀区金沙江路 1518 弄1', flag:false },
    { id: 2, note: '上海市普陀区金沙江路 1518 弄2', flag:false }
  ],
  undoing:[ 
    { id: 3, note: '上海市普陀区金沙江路 1518 弄3', flag:true }
  ]
}
// 泛型函数
function getData<T>(): Promise<result<T>> {
  console.log(123)
  const data : any = JSON.parse(JSON.stringify(DataFrom));
  return Promise.resolve({status:2,data } as result<T>)
} 

export default new Vuex.Store({
  state: { 
    datas:{
      doing:[],
      undoing:[],
    }
  },
  mutations: { 
      updateValue(state: any, value: string) { 
        state.datas.doing.push({ id:Math.random(), note: value, flag: false }); 
        DataFrom.doing.push({ id:Math.random(), note: value, flag: false }); 
      },
      updateData(state: any, data: string){
        state.datas = data; 
      }
  },
  actions: { 
    updateAction({ commit }, value) { 
      commit("updateValue", value);
    },
    async getData({ commit }){
      const result = await getData<lines>();
 
      commit("updateData", result.data);
    }
  },
  modules: {
  },
});
