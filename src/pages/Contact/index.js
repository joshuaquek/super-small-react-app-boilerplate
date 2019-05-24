import React, { Component } from 'react'
import { store, view } from 'react-easy-state'
import { withRouter } from 'react-router-dom'
import { changeLocalMessage, changeGlobalMessage } from './controller'
import { messageState } from '../../stores/MessageState'

class Contact extends Component {
  constructor (props) {
    super(props)
    this._state = store({
      title: 'Contact Page',
      myMessage: 'This is a component bound message.'
    })
  }

  render () {
    return (
      <div style={{ margin: '1rem', padding: '1rem', border: '1px solid deepskyblue', display: 'block' }}>
        <h3>Title: {this._state.title}</h3>

        <p>Local Message: {this._state.myMessage}</p>
        <label>Local Component Message: </label>
        <input type='text' placeholder='Type a message here' onChange={changeLocalMessage(this)} /><br />

        <p>Global Message: {messageState.myGlobalMessage}</p>
        <label>Global App Message: </label>
        <input type='text' placeholder='Type a message here' onChange={changeGlobalMessage(this)} />

      </div>
    )
  }
}

export default withRouter(view(Contact))
