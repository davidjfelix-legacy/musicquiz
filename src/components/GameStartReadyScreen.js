import React from 'react'
import {
  Screen,
  ScreenHeader,
  ScreenBody,
  ScreenFooter
} from './screen'
import ExpandoButton from './ExpandoButton'
import PlayerList from './PlayerList'
import './GameStartReadyScreen.css'

const players = [
  {
    id: 'A',
    name: 'Player 1'
  },
  {
    id: 'B',
    name: 'Player 2'
  },
  {
    id: 'C',
    name: 'Player 3'
  }
]

const game = {
  code: 'A64E',
  type: 'Automagic',
  players
}

const GameStartReadyScreen = () => (
  <Screen className="GameStartReadyScreen">
    <ScreenHeader>{game.type} Game</ScreenHeader>
    <ScreenBody backgroundColor="white">
      <div className="GameStartReadyScreen-code">Game Code: <strong>{game.code}</strong></div>
      <div className="GameStartReadyScreen-settings">
        <div className="title">Settings</div>
      </div>
      <div className="GameStartReadyScreen-players">
        <PlayerList players={game.players} />
      </div>
    </ScreenBody>
    <ScreenFooter>
      <ExpandoButton href="#">Start</ExpandoButton>
    </ScreenFooter>
  </Screen>
)

export default GameStartReadyScreen
