import React from 'react'
import ScreenBar from './ScreenBar'
import '../variables.css'

const ScreenHeader = ({ children }) => (
  <ScreenBar backgroundColor="var(--blue-3)">
    {children}
  </ScreenBar>
)

export default ScreenHeader
