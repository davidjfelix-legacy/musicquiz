import React from 'react'
import {compose, lifecycle, withProps, withState} from "recompose"
import {withDatabaseSubscribe, withLoading} from "./hocs"

import GameUsersList from './GameUsersList'
import database from "../database";

// FIXME: make this nicer
const LobbyLoading = () => (
  <div>Loading...</div>
)


const enhance = compose(
  withProps((old) => ({
    username: old.username.toUpperCase(),
    joinCode: old.joinCode.toUpperCase()
  })),
  withState('gameId', 'setGameId', null),
  withDatabaseSubscribe(
    'value',
    (props) => (`games-by-joincode/${props.joinCode}`),
    (props) => (snapshot) => (props.setGameId(snapshot.val()))
  ),
  withLoading(
    (props) => (props.gameId === null),
    LobbyLoading,
  ),
  lifecycle({
    componentWillMount() {
      database.ref(`users/${this.props.user.uid}/username`).set(this.props.username)
      database.ref(`games/${this.props.gameId}/players/${this.props.user.uid}`).set(true)
      database.ref(`user-games/${this.props.user.uid}/`).set(this.props.gameId)
    }
  })
)


const GameLobby = ({gameId}) => (
  <GameUsersList gameId={gameId}/>
)

export default enhance(GameLobby)
