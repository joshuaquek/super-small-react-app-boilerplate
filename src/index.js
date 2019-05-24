import React from 'react'
import { render as renderReactApp } from 'react-dom'

import App from './components/App'

renderReactApp(
  (
    <App />
  ), document.getElementById('main'))
