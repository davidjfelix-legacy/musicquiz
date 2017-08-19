import React from 'react'
import { compose, lifecycle } from 'recompose'

import auth from './auth'

import logo from './logo.svg'
import './App.css'

const enhance = compose(
  lifecycle({
    componentWillMount() {
      auth.signInAnonymously()
    }
  })
)

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)

export default enhance(App)
