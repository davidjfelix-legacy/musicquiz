import React from 'react'
import {
  compose,
  withState,
  withHandlers
} from 'recompose'
import {
  Screen,
  ScreenBody,
  ScreenFooter
} from './screen'
import ExpandoButton from './ExpandoButton'
import './UserResponseScreen.css'

const enhance = compose(
  withState('answer', 'setAnswer', ''),
  withHandlers({
    onAnswerChange: props => event => {
      props.setAnswer(event.target.value)
    }
  })
)

const UserResponseScreen = ({ answer, onAnswerChange }) => (
  <Screen className="UserResponseScreen">
    <ScreenBody bottomBar>
      <div className="UserResponseScreen-Form">
        <label for="response">Song Name:</label>
        <input name="response" type="text" value={answer} maxLength='64' onChange={onAnswerChange} />
      </div>
    </ScreenBody>
    <ScreenFooter>
      <ExpandoButton to="#">Answer</ExpandoButton>
    </ScreenFooter>
  </Screen>
)

export default UserResponseScreen
