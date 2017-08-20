import React from 'react'

const SpotifyLoginComponent = ({isLoginClicked, onClickLogin}) => (
  <div>
    {isLoginClicked? <div>Spinner</div>: ""}
    <button onClick={onClickLogin} >Log in to Spotify</button>
  </div>
)

export default SpotifyLoginComponent
