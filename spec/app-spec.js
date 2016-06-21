/* eslint-env mocha */

import React from 'react'
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
} from 'react-addons-test-utils'
import expect from 'expect'

import App from 'app'

describe('app', () => {
  it('exists', () => {
    expect(App).toExist()
  })

  it('does nothing to 2', () => {
    const wrapper = renderIntoDocument(<App value={2} />)
    const pElt = findRenderedDOMComponentWithTag(wrapper, 'p')
    expect(pElt.textContent).toMatch(/2/)
  })

  it('evenizes 1', () => {
    const wrapper = renderIntoDocument(<App value={1} />)
    const pElt = findRenderedDOMComponentWithTag(wrapper, 'p')
    expect(pElt.textContent).toMatch(/2/)
  })
})
