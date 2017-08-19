import React from 'react'
import ScreenBar from './ScreenBar'
import '../variables.css'

const ScreenFooter = ({ children }) => (
  <ScreenBar backgroundColor="var(--pink-1)">
    {children}
  </ScreenBar>
)

export default ScreenFooter
