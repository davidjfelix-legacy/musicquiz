import React from 'react'
import './ExpandoButton.css'

const ExpandoButton = ({ children, disabled, href }) => {
  if (disabled) {
    return (
      <div className="ExpandoButton ExpandoButton-disabled">
        <div className="ExpandoButton-content">
          {children}
        </div>
      </div>
    )
  }

  return (
    <a className="ExpandoButton" href={href}>
      <div className="ExpandoButton-content">
        {children}
      </div>
    </a>
  )
}

export default ExpandoButton
