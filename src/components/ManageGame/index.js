import React from 'react'
import {compose, withHandlers, withState} from 'recompose'

import {withDatabaseSubscribe, withLoading} from "../hocs"
import config from "../../config";

const client_id = config.spotify.client_id
const redirect_uri = config.firebase.escaped_spotify_redirect_uri
const spotifyLoginUrl = `https://accounts.spotify.com/authorize/?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=user-read-private%20user-read-email`

// FIXME: this should have some warning about not being logged in with firebase
const AuthLoading = () => (<div/>)

let childWindow = null

const enhance = compose(
  withState('hasToken', 'setHasToken', false),
  withHandlers({
    onClickLogin: props => event => {
      childWindow = window.open(spotifyLoginUrl + `&state=${props.user.uid}`, 'spotifyLogin')
    },
  }),
  withLoading(
    (props) => (props.user === null),
    AuthLoading
  ),
  withDatabaseSubscribe(
    'value',
    (props) => `users/${props.user.uid}/token`,
    (props) => (snapshot) => {
      if (childWindow !== null) {
        childWindow.close()
      }
    }
  )
)


const ManageGame = ({user, onClickLogin}) => (
  <div>
  </div>
)

export default enhance(ManageGame)
