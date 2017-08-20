import React from 'react'
import {
  Screen,
  ScreenHeader,
  ScreenBody
} from './screen'
import GameUsersList from './GameUsersList'
import './GameStatus.css'

const game = {
  'join_code': 'ABCD'
}
const gameId = "FIXME"

const GameStatus = () => (
  <Screen className="GameStatus">
    <ScreenHeader>Automagic Game</ScreenHeader>
    <ScreenBody topBar>
      <div className="GameStatus-code">Game Code: {game.join_code}</div>
      <div className="GameStatus-players">
        <GameUsersList gameId={gameId} />
      </div>
    </ScreenBody>
  </Screen>
)

export default GameStatus
