import React from 'react'
import {compose, withState} from "recompose"
import {withDatabaseSubscribe} from "./hocs"
import './UserColor.css'

const enhance = compose(
  withState('color', 'setColor', '#ff4081'),
  withDatabaseSubscribe(
    'value',
    (props) => (`users/${props.userId}/color`),
    (props) => (snapshot) => (props.setColor(snapshot.val()))
  )
)

const UserColor = ({color}) => (
  <div className="PlayerIcon" style={{backgroundColor: color}} />
)

export default enhance(UserColor)
