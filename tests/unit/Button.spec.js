import chai from 'chai'
import { mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.should()
chai.use(sinonChai)


describe('Button was clicked', () => {
  it('Clicked button calls our method with argument "answer"', () => {
    const spy = sinon.spy()
    const wrapper = mount(Button, {
      methods: {
        answer: spy
      }
    })
    wrapper.find('button').trigger('click')
spy.should.have.been.calledWith('answer')
        spy.should.have.been.called
  })
})
