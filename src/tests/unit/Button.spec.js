import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'
import sinon from 'sinon'


describe('Button was clicked', () => {
  it('Clicked button calls our method with argument "answer"', () => {
    const spy = sinon.spy()
    const wrapper = mount(Button, {
      listeners: {
        Button: spy
      }
    })
    wrapper.find('button').trigger('click')

    spy.should.have.been.calledWith('answer')
  })
})
