import React from 'react'
import ScreenBar from './ScreenBar'
import './ScreenFooter.css'
import '../../variables.css'

const ScreenFooter = ({ children, className }) => (
  <ScreenBar className={className ? `ScreenFooter ${className}` : 'ScreenFooter'} backgroundColor="var(--secondary)">
    {children}
  </ScreenBar>
)

export default ScreenFooter
