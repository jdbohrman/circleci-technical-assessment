import Button from '../components/Button.vue'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'

describe('Click event', () => {
  it('Click on answer button calls our method with argument "answer"', () => {
    const spy = sinon.spy()
    const wrapper = mount(Button, {
      propsData: {
        alert: spy
      }
    })
    wrapper.find('button.answer').trigger('click')

    spy.should.have.been.calledWith('answer')
  })
})