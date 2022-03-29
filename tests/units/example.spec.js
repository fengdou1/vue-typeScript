import { shallowMount,mount } from '@vue/test-utils'
import ListItem from '@/components/ListItem'

describe('ListItem.vue', () => {
 
  let wrapper = null
  beforeEach(async () => {
    const row = {
      id: 1,
      date: "2020-01-02",
      flag: true, 
      note: "今天天气很晴朗!"
    }
    wrapper = shallowMount(ListItem, {
      propsData: {
        row
      }
    })
  })
 
  test('test do thing item', () => {  
    expect(wrapper.find('[data="thingDo"]').text()).toBe("2."+wrapper.vm.row.note)
  })


  test('click chooseItem',async () => {   
    const done = wrapper.find('[data-testid="btn-thingDo"]');
    await done.trigger('click')
    expect(done.element.checked).toBeFalsy() 
  })

  test('click chooseUnItem',async ()=>{
    wrapper = shallowMount(ListItem, {
      propsData: {
        row:  {
          id: 1,
          date: "2020-01-02",
          flag: false, 
          note: "今天天气很晴朗!"
        }
      } 
    });

    const done = wrapper.find('[data-testid="btn-thingUnDo"]')
    let res = await done.trigger('click'); 
    expect(done.element.checked).toBeTruthy() 

  })
})