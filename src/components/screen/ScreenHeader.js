import React from 'react'
import ScreenBar from './ScreenBar'
import './ScreenHeader.css'
import '../../variables.css'

const ScreenHeader = ({ children, className }) => (
  <ScreenBar
    className={className ? `ScreenHeader ${className}` : 'ScreenHeader'}
    backgroundColor="var(--primary)"
  >
    {children}
  </ScreenBar>
)

export default ScreenHeader
