import React from 'react'
import {
  Screen,
  ScreenBody
} from './screen'
import answerComparator from '../answer-comparator'
import './AnswerScreen.css'

const AnswerScreen = ({ userAnswer, answer }) => {
  let comparison = answerComparator(userAnswer, answer)
  let correctness = comparison ? 'Correct!' : 'Wrong!'
  let feedback = comparison
    ? `The song's title was "${answer}".`
    : `The song's title was "${answer}" but you guessed "${userAnswer}".`

  return (
    <Screen className="AnswerScreen">
      <ScreenBody>
        <div className="AnswerScreen-Response">
          <div className="AnswerScreen-Correctness">{correctness}</div>
          <div className="AnswerScreen-Feedback">{feedback}</div>
        </div>
        <div className="AnswerScreen-WaitingMessage">
          Waiting for leader to begin next round...
        </div>
      </ScreenBody>
    </Screen>
  )
}

export default AnswerScreen
