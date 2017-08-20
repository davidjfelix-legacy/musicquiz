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
import GameLobby from "./components/GameLobby"
import UserResponseScreen from './components/UserResponseScreen'
import GameStatus from './components/GameStatus'

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
      <Route path="/join/:joinCode/:username" render={({match}) => (<GameLobby user={user} username={match.params.username} joinCode={match.params.joinCode}/>)}/>
      <Route path="/status/:gameId" render={({ match }) => (
        <GameStatus user={user} gameId={match.params.gameId} />
      )}/>
      <Route exact path='/answer' component={UserResponseScreen} />
      <Route path="/manage" ><ManageGame user={user}/></Route>
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default enhance(App)
