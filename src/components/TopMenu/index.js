import React, { Component } from 'react'
import { store, view } from 'react-easy-state'
import { Link, withRouter } from 'react-router-dom'

class TopMenu extends Component {
  constructor (props) {
    super(props)
    this._state = store({})
  }

  render () {
    return (
      <div style={{ margin: '1rem', padding: '1rem', border: '1px solid red', display: 'block' }}>
        <Link to='/'>Home</Link><br />
        <Link to='/about'>About Us</Link><br />
        <Link to='/contact'>Contact</Link><br /><br />
      </div>
    )
  }
}

export default withRouter(view(TopMenu))
