import Vuex from "vuex"
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Head from '@/components/Head'
import store from '../../src/store/index';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Head.vue', () => {
    let wrapper = null
    beforeEach(async () => { 
      wrapper = shallowMount( Head, {
        store, localVue
      })
    })


    it("Add Data",async ()=>{ 
        const input = wrapper.find('input[id="title"]');
        const text = 'play';
        await input.setValue(text);

        await input.trigger('keyup.enter')

    
        let doingArr = store.state.datas.doing; 
        expect(doingArr[doingArr.length-1].note).toBe(text)
        
    })


})