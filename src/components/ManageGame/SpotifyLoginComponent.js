import React from 'react'

import {
  Screen,
  ScreenBody,
  ScreenFooter
} from '../screen'

import './SpotifyLoginComponent.css'

const speaker = require('./spotify.png')

const SpotifyLoginComponent = ({isLoginClicked, onClickLogin}) => (
  <Screen>
    <ScreenBody>
      <img src={speaker} style={{height: '6em'}}/>
    </ScreenBody>
    <ScreenFooter>
    <div className="SpotifyLoginComponent-button" style={{color: 'white'}}>
        {isLoginClicked? <div>Spinner</div>: ""}
        <div onClick={onClickLogin} >Log in to Spotify</div>
      </div>
    </ScreenFooter>
  </Screen>
)

export default SpotifyLoginComponent
