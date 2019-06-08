import React from 'react'
import { render as renderReactApp } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App'

renderReactApp(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('main'))
