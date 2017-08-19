import React from 'react'
import './ScreenBody.css'

const ScreenBody = ({ children, className }) => (
  <div className={`ScreenBody ${className}`}>
    {children}
  </div>
)

export default ScreenBody
