import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { store, view } from 'react-easy-state'

import Home from '../../pages/Home'
import About from '../../pages/About'
import Contact from '../../pages/Contact'

class App extends Component {
  constructor (props) {
    super(props)
    this._state = store({})
  }

  render () {
    return (
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    )
  }
}

export default view(App)
