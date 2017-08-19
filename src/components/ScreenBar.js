import React from 'react'

import './ScreenBar.css'

const ScreenBar = ({ children, backgroundColor }) => (
  <div
    className="ScreenBar"
    style={{backgroundColor: backgroundColor || '#fff'}}
  >
    {children}
  </div>
)

export default ScreenBar
