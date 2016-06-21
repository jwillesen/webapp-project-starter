import React, {PropTypes as prop} from 'react'

export default class App extends React.Component {
  static get propTypes () {
    return {
      value: prop.number,
    }
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
