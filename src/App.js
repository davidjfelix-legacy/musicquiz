import React from 'react'
import {compose, lifecycle, withState} from 'recompose'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import auth from './auth'

import JoinGame from './components/JoinGame'
import ManageGame from './components/ManageGame'

const enhance = compose(
  withState('user', 'updateUser', null),
  lifecycle({
    componentWillMount() {
      this.unsubscribeAuth = auth.onAuthStateChanged((user) => (
        this.props.updateUser(user)
      ))
      auth.signInAnonymously()
    },
    componentWillUnmount() {
      this.unsubscribeAuth()
    }
  })
)

const App = ({user}) => (
  <Router>
    <div>
      <Route exact path="/" component={JoinGame}/>
      <Route path="/manage" ><ManageGame user={user}/></Route>
    </div>
  </Router>
)

export default enhance(App)
