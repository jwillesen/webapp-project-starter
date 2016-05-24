/* eslint-env mocha */

import expect from 'expect'

import App from 'app'

describe('app', () => {
  it('exists', () => {
    expect(App).toExist()
  })

  it('does nothing to 2', () => {
    const app = new App()
    expect(app.evenize(2)).toBe(2)
  })

  // it('evenizes 1', () => {
  //   const app = new App()
  //   expect(app.evenize(1)).toBe(2)
  // })
})
