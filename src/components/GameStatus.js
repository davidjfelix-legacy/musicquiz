import React from 'react'
import { lifecycle, compose } from 'recompose'
import {
  Screen,
  ScreenHeader,
  ScreenBody
} from './screen'
import GameUsersList from './GameUsersList'
import { withDatabaseSubscribe } from './hocs'
import { startGame } from '../api/firebase'
import { play } from '../api/spotify'
import './GameStatus.css'

const enhance = compose(
  withDatabaseSubscribe(
    'value',
    props => `users/${props.user.uid}/token`,
    props => snapshot => {
      if (snapshot.val() !== null) {
        play(snapshot.val())
      }
    }
  ),
  lifecycle({
    componentWillMount() {
      startGame(this.props.gameId)
    }
  })
)

const GameStatus = ({ user, gameId }) => (
  <Screen className="GameStatus">
    <ScreenHeader>Automagic Game</ScreenHeader>
    <ScreenBody topBar>
      <div className="GameStatus-players">
        <GameUsersList gameId={gameId} />
      </div>
    </ScreenBody>
  </Screen>
)

export default enhance(GameStatus)
