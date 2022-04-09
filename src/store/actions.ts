import { lines, result } from '../types/index'; 
import { DataFrom } from "./data";
 
// 泛型函数
function getData<T>(): Promise<result<T>> {
    console.log(123)
    const data : any = JSON.parse(JSON.stringify(DataFrom));
    return Promise.resolve({status:2,data } as result<T>)
} 

export const actions = { 
    updateAction({ commit }:any, value:any) { 
        commit("updateValue", value);
    },
    async getData({ commit }:any){
        const result = await getData<lines>(); 
        commit("updateData", result.data);
    }
} 

