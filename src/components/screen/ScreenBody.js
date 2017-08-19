import React from 'react'
import './ScreenBody.css'

const ScreenBody = ({ children, className }) => (
  <div className={className ? `ScreenBody ${className}` : 'ScreenBody'}>
    {children}
  </div>
)

export default ScreenBody
