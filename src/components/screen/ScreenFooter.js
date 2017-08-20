import React from 'react'
import ScreenBar from './ScreenBar'
import '../../variables.css'

const ScreenFooter = ({ children, className }) => (
  <ScreenBar className={className ? className : ''} backgroundColor="var(--secondary)">
    {children}
  </ScreenBar>
)

export default ScreenFooter
