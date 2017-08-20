import React from 'react'
import {withDatabaseSubscribe} from "./hocs"
import {compose, withState} from "recompose"
import './UserName.css'

const enhance = compose(
  withState('username', 'setUsername', 'Unknown Player'),
  withDatabaseSubscribe(
    'value',
    (props) => (`users/${props.userId}/username`),
    (props) => (snapshot) => (props.setUsername(snapshot.val()))
  )
)

const Username = ({username}) => (
  <span className="UserName">{username}</span>
)

export default enhance(Username)
