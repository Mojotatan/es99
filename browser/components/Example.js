import React from 'react'

// The bare minimum of a react component is actually very little
const ExampleWithoutState = (props) => {
  // 'props' are defined when you call the component
  // In this case, we are calling the component in Main.js and passing in the property 'hey'

  // All we have to do is return what we want the browser to render
  return (
    <div>{props.hey}</div> // to use javascript in your jsx, simply wrap the expression in curly braces
  )
}

// Don't forget to export your component so other files can find it!
export default ExampleWithoutState



// If you need to keep track of a dynamic value, you'll want to track it with a state object
// This is very useful for things such as forms

// To do that, you need extend React.Component, which so your component inherits its methods
class ExampleWithState extends React.Component { 

  constructor(props) {
    super(props)
    this.state = {
      hey: 'arnold'
    }
  }

  render() {
    return (
      <div>I'm a componentttt</div>
    )
  }
}