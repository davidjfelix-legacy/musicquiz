import React from 'react'
import { compose, lifecycle } from 'recompose'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import auth from './auth'

import JoinGame from './components/join-game/join-game'

const enhance = compose(
  lifecycle({
    componentWillMount() {
      auth.signInAnonymously()
    }
  })
)

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={JoinGame}/>
    </div>
  </Router>
)

export default enhance(App)
