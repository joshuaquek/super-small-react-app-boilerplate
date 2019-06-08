import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { store, view } from 'react-easy-state'

import TopMenu from '../TopMenu'
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
      <div>
        <TopMenu />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(view(App))
