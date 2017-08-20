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

const GameStartReadyScreen = ({gameId, game}) => (
  <Screen className="GameStartReadyScreen">
    <ScreenHeader>Automagic Game</ScreenHeader>
    <ScreenBody topBar bottomBar>
      <div className="GameStartReadyScreen-code">Game Code: {game.join_code}</div>
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
        <GameUsersList gameId={gameId} />
      </div>
    </ScreenBody>
    <ScreenFooter>
      <ExpandoButton disabled={!game || !game.players || !Object.keys(game.players).length > 0} to="#">Start</ExpandoButton>
    </ScreenFooter>
  </Screen>
)

export default GameStartReadyScreen
