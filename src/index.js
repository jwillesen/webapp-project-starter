import App from './app'
import React from 'react'
import ReactDOM from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App value={42} />, document.getElementById('app'))
})
