import React from 'react'
import {compose, lifecycle, withHandlers, withState} from 'recompose'

import {withDatabaseSubscribe, withLoading} from "../hocs"
import config from "../../config"
import SpotifyLoginComponent from "./SpotifyLoginComponent"
import FirebaseAuthLoading from "./FirebaseAuthLoading"
import database from "../../database";

const client_id = config.spotify.client_id
const redirect_uri = config.firebase.escaped_spotify_redirect_uri
const spotifyLoginUrl = `https://accounts.spotify.com/authorize/?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=user-read-private%20user-read-email`


let childWindow = null

const enhance = compose(
  withState('isLoginClicked', 'setLoginClicked', false),
  withState('hasToken', 'setHasToken', false),
  withState('token', 'setToken', {}),
  withState('gameId', 'setGameId', ''),
  withHandlers({
    onClickLogin: props => event => {
      childWindow = window.open(spotifyLoginUrl + `&state=${props.user.uid}`, 'spotifyLogin')
    },
  }),
  withLoading(
    (props) => (props.user === null),
    FirebaseAuthLoading
  ),
  withDatabaseSubscribe(
    'value',
    (props) => `users/${props.user.uid}/token`,
    (props) => (snapshot) => {
      if (snapshot.val() !== null && typeof snapshot.val() === 'object') {
        props.setHasToken(true)
        props.setToken(snapshot.val())
      }
      if (childWindow !== null) {
        childWindow.close()
      }
    }
  ),
  withLoading(
    (props) => (!props.hasToken),
    SpotifyLoginComponent
  ),
  withState('game', 'setGame', {}),
  lifecycle({
    componentWillMount() {
      const gameRef = database.ref('games').push()
      gameRef.set({
          is_started: false,
          owner_id: this.props.user.uid
      })
      database.ref(`games-by-user/${this.props.user.uid}`).set({
        [gameRef.key]: true
      })
      this.props.setGameId(gameRef.key)
    }
  }),
  withDatabaseSubscribe(
    'value',
    (props) => (`games/${props.gameId}`),
    (props) => (snapshot) => {
      if (snapshot.val() !== null && typeof snapshot.val() === 'object') {
        props.setGame(snapshot.val())
      }
    }
  ),
)

const ManageGame = ({user, token}) => (
  <div>
    {JSON.stringify(token)}
  </div>
)

export default enhance(ManageGame)
