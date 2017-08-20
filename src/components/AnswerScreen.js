import React from 'react'
import {
  Screen,
  ScreenBody
} from './screen'
import './AnswerScreen.css'

const CorrectAnswerScreen = ({ userAnswer, answer, type }) => {
  let correctness = userAnswer === answer ? 'Correct!' : 'Wrong!'
  let feedback = userAnswer === answer
    ? `The song's ${type} was ${answer}.`
    : `The song's ${type} was ${answer} but you guessed ${userAnswer}.`

  return (
    <Screen className="AnswerScreen">
      <ScreenBody>
        <div className="AnswerScreen-Response">
          <div className="AnswerScreen-Correctness">{correctness}</div>
          <div className="AnswerScreen-Feedback">{feedback}</div>
        </div>
        <div className="AnswerScreen-Scoreboard">Insert scoreboard here maybe...</div>
        <div className="AnswerScreen-WaitingMessage">
          Waiting for leader to begin next round...
        </div>
      </ScreenBody>
    </Screen>
  )
}

export default CorrectAnswerScreen
