import React from 'react'
import { 
  compose,
  withState,
  withHandlers
} from 'recompose'


import {
  ScreenBody,
  Screen,
  ScreenFooter
} from '../screen'

import ExpandoButton from '../ExpandoButton'

import './index.css'

const enhance = compose(
  withState('gameCode', 'setGameCode', ''),
  withHandlers({
    onGameCodeChange: props => event => {
      console.log(event);
      props.setGameCode(event.target.value);
    }
  })
)

const JoinGame = ({gameCode, onGameCodeChange}) => (
  <Screen>
    <ScreenBody className={'JoinGame-container'}>
      <div style={{margin: '0 auto', textAlign: 'center'}}>
        <span className={'JoinGame-gameCodeLabel'}>Game Code:</span>
        <input id='gameCode' name='gameCode' type='gameCode' value={gameCode} className={'JoinGame-gameCode'} onChange={onGameCodeChange}></input>
      </div>

      <div style={{margin: '0 auto', textAlign: 'center'}}>
        <span className={'JoinGame-userNameLabel'}>User Name:</span>
        <input id='gameCode' name='gameCode' type='gameCode' value={gameCode} className={'JoinGame-userName'} onChange={onGameCodeChange}></input>
      </div>
    </ScreenBody>
    <ScreenFooter>
      <ExpandoButton href='join'>
        Join!
      </ExpandoButton>
    </ScreenFooter>
  </Screen>
);

export default enhance(JoinGame)
