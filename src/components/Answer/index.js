import React from 'react'
import { 
  compose,
  withState,
  withHandlers
} from 'recompose'


import {
  Screen,
  ScreenHeader,  
  ScreenBody,
  ScreenFooter
} from '../screen'

import ExpandoButton from '../ExpandoButton'

import './index.css'

const enhance = compose(
  withState('answer', 'setAnswer', ''),
  withHandlers({
    onAnswerChange: props => event => {
      props.setAnswer(event.target.value);
    }
  })
)

const Answer = ({answer, onAnswerChange}) => (
  <Screen>
    <ScreenHeader>
      Answer!
    </ScreenHeader>
    <ScreenBody className={'JoinGame-container'}>     
        <input id='answer' name='answer' type='answer' value={answer} maxLength='64' onChange={onAnswerChange}></input>
    </ScreenBody>
    <ScreenFooter>
      <ExpandoButton href={`game/`+ answer}>
        I KNOW!
      </ExpandoButton>
    </ScreenFooter>
  </Screen>
);

export default enhance(Answer)
