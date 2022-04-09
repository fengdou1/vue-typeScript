import { shallowMount,mount } from '@vue/test-utils';
import store from '../../src/store/index';
// import flushPromises from "flush-promises"
import { DataFrom } from "../../src/store/data";

describe('Data Store',()=>{
  
    it("actions  getData",async ()=>{ 
        await store.dispatch("getData");
 
        expect( store.state.datas ).toEqual(DataFrom)
    })

    it("actions  updateAction",()=>{
        let str = "Hello World!"
        store.dispatch("updateAction", str);
        // doing.push({ id:Math.random(), note: value, flag: false })
        let doingArr = store.state.datas.doing; 
       
        expect(doingArr[doingArr.length-1].note).toEqual(str)
    })


})







