import React, { Component } from 'react'
import { store, view } from 'react-easy-state'
import { Link, withRouter } from 'react-router-dom'
import { changeLocalMessage, changeGlobalMessage } from './controller'

class Home extends Component {
  constructor (props) {
    super(props)
    this._state = store({
      title: 'Home Page',
      myMessage: 'This is a message that you can change.'
    })
  }

  render () {
    return (
      <div style={{ margin: '1rem', padding: '1rem', border: '1px solid deepskyblue', display: 'block' }}>
        <h3>Title: {this._state.title}</h3>
        <p>Local Message: {this._state.myMessage}</p>

        <Link to='/'>Home</Link><br />
        <Link to='/about_us'>About Us</Link><br />
        <Link to='/contact'>Contact</Link><br /><br />

        <label>Local Component Message: </label>
        <input type='text' placeholder='Type a message here' onChange={changeLocalMessage(this)} /><br />

        <label>Global App Message: </label>
        <input type='text' placeholder='Type a message here' onChange={changeGlobalMessage(this)} />

      </div>
    )
  }
}

export default withRouter(view(Home))
