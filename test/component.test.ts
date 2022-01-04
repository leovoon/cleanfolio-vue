import { mount } from '@vue/test-utils'
import BaseButton from '@/components/BaseButton.vue'
describe('BaseButton.vue', () => {
  it('should render', () => {
    const wrapper = mount(BaseButton, { props: { title: 'any text' } })
    expect(wrapper.text()).toContain('any text')
    expect(wrapper.html()).toMatchSnapshot()
  })
})

//   it('should be interactive', async() => {
//     const wrapper = mount(Counter, { props: { initial: 0 } })
//     expect(wrapper.text()).toContain('0')

//     expect(wrapper.find('.inc').exists()).toBe(true)

//     await wrapper.get('button').trigger('click')

//     expect(wrapper.text()).toContain('1')
//   })
// })
