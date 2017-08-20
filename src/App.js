import React from 'react'
import {compose, lifecycle, withState} from 'recompose'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import auth from './auth'

import Answer from './components/Answer'
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
      <Route exact path="/" component={JoinGame}/>
      <Route exact path='/answer' component={Answer}/>
      <Route path="/manage" ><ManageGame user={user}/></Route>
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default enhance(App)
