import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

describe('App', () => {
  it('has data', () => {
    expect(typeof App.data).toBe('function')
  })
})

describe('Mounted App', () => {
  const wrapper = mount(App);

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})