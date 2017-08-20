import React from 'react'
import {compose, withState} from "recompose"
import {withDatabaseSubscribe} from "./hocs"

import PlayerList from './PlayerList'

const enhance = compose(
  withState('gameUsers', 'setGameUsers', []),
  withDatabaseSubscribe(
    'value',
    (props) => (`games/${props.gameId}/players`),
    (props) => (snapshot) => {
      const gamePlayers = snapshot.val()
      if (gamePlayers !== null && typeof gamePlayers === 'object') {
        props.setGameUsers(Object.keys(gamePlayers))
      }
    }
  )
)

const GameUsersList = ({gameUsers}) => (
  <PlayerList userIds={gameUsers}/>
)

export default enhance(GameUsersList)
