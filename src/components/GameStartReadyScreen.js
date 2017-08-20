import React from 'react'
import {
  Screen,
  ScreenHeader,
  ScreenBody,
  ScreenFooter
} from './screen'
import ExpandoButton from './ExpandoButton'
import GameUsersList from './GameUsersList'
import './GameStartReadyScreen.css'

const game = {
  code: 'A64E',
  type: 'Automagic',
  players: []
}

const GameStartReadyScreen = () => (
  <Screen className="GameStartReadyScreen">
    <ScreenHeader>{game.type} Game</ScreenHeader>
    <ScreenBody topBar bottomBar>
      <div className="GameStartReadyScreen-code">Game Code: {game.code}</div>
      <div className="GameStartReadyScreen-Settings">
        <div className="Settings-Title title">Settings</div>
        <ul className="Settings-List">
          <li className="List-Row">
            <span className="Row-SettingName">Playlist</span>
            <span className="Row-SettingValue">Viral Top 50</span>
          </li>
          <li className="List-Row">
            <span className="Row-SettingName">Song Count</span>
            <span className="Row-SettingValue">10</span>
          </li>
          <li className="List-Row">
            <span className="Row-SettingName">Clip Duration</span>
            <span className="Row-SettingValue">30 seconds</span>
          </li>
        </ul>
      </div>
      <div className="GameStartReadyScreen-players">
        <GameUsersList gameId="FIXME" />
      </div>
    </ScreenBody>
    <ScreenFooter>
      <ExpandoButton disabled={!game.players.length > 0} href="#">Start</ExpandoButton>
    </ScreenFooter>
  </Screen>
)

export default GameStartReadyScreen
