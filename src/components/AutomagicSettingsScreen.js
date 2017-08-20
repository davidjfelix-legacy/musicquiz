import React from 'react'
import {
  Screen,
  ScreenHeader,
  ScreenBody,
  ScreenFooter
} from './screen'
import ExpandoButton from './ExpandoButton'
import './AutomagicSettingsScreen.css'

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
      <ExpandoButton href="#">Start</ExpandoButton>
    </ScreenFooter>
  </Screen>
)

export default AutomagicSettingsScreen
