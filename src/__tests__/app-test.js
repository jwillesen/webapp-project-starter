import React from 'react'
import {shallow} from 'enzyme'
import App from '../app'

describe('app', () => {
  it('does nothing to 2', () => {
    const wrapper = shallow(<App value={2} />)
    expect(wrapper.find('p').text()).toEqual(expect.stringMatching(/2/))
  })

  it('evenizes 1', () => {
    const wrapper = shallow(<App value={1} />)
    expect(wrapper.find('p').text()).toEqual(expect.stringMatching(/2/))
  })
})
