import React from 'react'

// import components
import Example from './components/Example'

class Main extends React.Component { 

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Example hey="arnold" />
    )
  }
}

export default Main