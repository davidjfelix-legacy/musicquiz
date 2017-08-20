import React from 'react'
import './Screen.css'

const Screen = ({ children, className }) => (
  <div
    className={className ? `Screen ${className}` : 'Screen'}
  >
    {children}
  </div>
)

export default Screen
