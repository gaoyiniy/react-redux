import React from 'react'
import { shallow } from 'enzyme'
import Counter from './index'

const setup = (value = 0) => {
  const actions = {
    onIncrement: jest.fn(),
    onDecrement: jest.fn()
  }

  const component = shallow(<Counter value={{ count: value }} {...actions} />)

  return {
    component,
    actions,
    buttons: component.find('button'),
    h: component.find('h5')
  }
}

describe('Counter Component', () => {
  it('should display result', () => {
    const { h } = setup(2)
    expect(h.text()).toMatch(/result: 2/)
  })

  it('should first button call onIncrement', () => {
    const { buttons, actions } = setup()
    buttons.at(0).simulate('click')
    expect(actions.onIncrement).toBeCalled()
  })

  it('should second button call onDecrement', () => {
    const { buttons, actions } = setup()
    buttons.at(1).simulate('click')
    expect(actions.onDecrement).toBeCalled()
  })
})
