import React from 'react'
import { compose, lifecycle } from 'recompose'

import auth from '../../auth'

const enhance = compose(
  lifecycle({
    componentWillMount() {
      auth.signInAnonymously();
    }
  })
);

const JoinGame = () => (
  <div>
    MUSIC QUIZ 2.0
  </div>
);

export default enhance(JoinGame);
