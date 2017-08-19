import React from 'react'

import Screen from './Screen'
import ScreenHeader from './ScreenHeader'
import ScreenBody from './ScreenBody'
import ScreenFooter from './ScreenFooter'
import ExpandoButton from './ExpandoButton'

const AutomagicSettingsScreen = () => (
  <Screen className="AutomagicSettings">
    <ScreenHeader>Automagic</ScreenHeader>
    <ScreenBody>
      <div className="AutomagicSettings-title">Viral Top 50</div>
      <div className="AutomagicSettings-settings">
        <ul>
          <li>Time 20 Second Duration</li>
          <li>Whole Thing</li>
        </ul>
      </div>
    </ScreenBody>
    <ScreenFooter>
      <ExpandoButton href="#">GO</ExpandoButton>
    </ScreenFooter>
  </Screen>
)

export default AutomagicSettingsScreen
