import React from 'react'
import PropTypes from 'prop-types'

export default class App extends React.Component {
  static propTypes = {
    value: PropTypes.number,
  }

  evenize (value) {
    if (value % 2) {
      return value + 1
    } else {
      return value
    }
  }

  render () {
    return <p>the answer is: {this.evenize(this.props.value)}</p>
  }
}
