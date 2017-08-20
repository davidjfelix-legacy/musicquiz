import React from 'react'
import {compose, lifecycle, withState} from 'recompose'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import auth from './auth'

import NotFound from './components/FourOhFour'
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
    <Switch>
      <div>
        <Route exact path="/" component={JoinGame}/>
        <Route path="/manage" ><ManageGame user={user}/></Route>
        <Route component={NotFound} />
      </div>
    </Switch>
  </Router>
)

export default enhance(App)
