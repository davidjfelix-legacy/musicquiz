import React from 'react'
import {withDatabaseSubscribe} from "./hocs"
import {compose} from "recompose"


const enhance = compose(
  withState('username', 'setUsername', 'Unknown Player'),
  withDatabaseSubscribe(
    'value',
    (props) => (`users/${userId}/username`),
    (props) => (snapshot) => (props.setUsername(snapshot.val()))
  )
)

const Username = ({username}) => (
  {username}
)

export default enhance(Username)
