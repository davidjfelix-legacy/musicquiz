import React from 'react'
import './ScreenBar.css'
import '../variables.css'

const ScreenBar = ({ children, backgroundColor }) => (
  <div
    className="ScreenBar"
    style={{backgroundColor: backgroundColor}}
  >
    {children}
  </div>
)

ScreenBar.defaultProps = {
  backgroundColor: 'var(--primary)'
}

export default ScreenBar
