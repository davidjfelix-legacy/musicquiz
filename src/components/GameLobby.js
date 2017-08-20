import React from 'react'
import {compose, withProps, withState} from "recompose"
import {withDatabaseSubscribe, withLoading} from "./hocs"

import GameUsersList from './GameUsersList'

// FIXME: make this nicer
const LobbyLoading = () => (
  <div>Loading...</div>
)


const enhance = compose(
  withProps(({match}) => ({
    joinCode: match.params.joinCode,
    username: match.params.username,
  })),
  withState('gameId', 'setGameId', null),
  withDatabaseSubscribe(
    'value',
    (props) => (`games-by-joincode/${props.joinCode}`),
    (props) => (snapshot) => (props.setGameId(snapshot.val()))
  ),
  withLoading(
    (props) => (!props.gameId !== null),
    LobbyLoading,
  )
)


const GameLobby = ({gameId}) => (
  <GameUsersList gameId={gameId}/>
)

export default enhance(GameLobby)
