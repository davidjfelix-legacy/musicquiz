import React from 'react'
import {compose, withState} from "recompose"
import {withDatabaseSubscribe} from "./hocs"

const enhance = compose(
  withState('color', 'setColor', '#ff4081'),
  withDatabaseSubscribe(
    'value',
    (props) => (`users/${props.userId}/color`),
    (props) => (snapshot) => (props.setColor(snapshot.val()))
  )
)

//FIXME: MARK: you need to make this actually accept color and draw a little color bauble
const UserColor = ({color}) => (
  <div></div>
)

export default enhance(UserColor)
