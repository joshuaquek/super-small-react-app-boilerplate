import React, { Component } from 'react'
import { render as renderApp } from 'react-dom'
import { BrowserRouter, Link } from 'react-router-dom'
import { store, view } from 'react-easy-state'

class App extends Component {
  constructor (props) {
    super(props)
    this._state = store({
      title: 'React App',
      myMessage: 'This is a message that you can change.'
    })
  }

  render () {
    return (
      <BrowserRouter>
        <div>
          <h3>Title: {this._state.title}</h3>
          <p>Message: {this._state.myMessage}</p>
          <Link to='/'>Home</Link>
          <br />
          <Link to='/about_us'>About Us</Link>
          <br />
          <Link to='/contact'>Contact</Link>
          <br /><br />
          <label>Message: </label>
          <input type='text' placeholder='Type a message here' onChange={changeTextMessage(this)} />
        </div>
      </BrowserRouter>
    )
  }
}

function changeTextMessage (_this) {
  return function (event) { // This is the event handler to return to the 'onChange' attribute
    _this._state.myMessage = event.target.value
  }
}

const ReactiveApp = view(App)
renderApp(<ReactiveApp />, document.getElementById('main'))
