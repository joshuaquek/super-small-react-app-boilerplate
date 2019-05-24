import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'
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
      <BrowserRouter>
        <div>
          <TopMenu />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default view(App)
