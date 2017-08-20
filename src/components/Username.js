import React from 'react'
import {withDatabaseSubscribe} from "./hocs"
import {compose, withState} from "recompose"


const enhance = compose(
  withState('username', 'setUsername', 'Unknown Player'),
  withDatabaseSubscribe(
    'value',
    (props) => (`users/${props.userId}/username`),
    (props) => (snapshot) => (props.setUsername(snapshot.val()))
  )
)

const Username = ({username}) => (
  {username}
)

export default enhance(Username)
