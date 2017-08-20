import React from 'react'
import {Link} from 'react-router-dom'
import './ExpandoButton.css'

const ExpandoButton = ({children, disabled, to}) => {
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
    <Link className="ExpandoButton" to={to}>
      <div className="ExpandoButton-content">
        {children}
      </div>
    </Link>
  )
}

export default ExpandoButton
