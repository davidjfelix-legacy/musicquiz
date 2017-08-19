import React from 'react'
import './Screen.css'

const Screen = ({ children, className }) => (
  <div className={`Screen ${className}`}>
    {children}
  </div>
)

export default Screen
