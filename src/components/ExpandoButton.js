import React from 'react'
import './ExpandoButton.css'

const ExpandoButton = ({ children, href }) => (
  <a className="ExpandoButton" href={href}>
    <div className="ExpandoButton-content">
      {children}
    </div>
  </a>
)

export default ExpandoButton
