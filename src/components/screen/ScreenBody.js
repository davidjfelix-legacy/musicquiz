import React from 'react'
import './ScreenBody.css'

const ScreenBody = ({ children, className, topBar, bottomBar, backgroundColor }) => {
  const styles = {
    backgroundColor
  }

  if (topBar) {
    styles.marginTop = "7vh"
  }

  if (bottomBar) {
    styles.marginBottom = "7vh"
  }

  return (
    <div
      className={className ? `ScreenBody ${className}` : 'ScreenBody'}
      style={styles}
    >
      {children}
    </div>
  )
}

ScreenBody.defaultProps = {
  backgroundColor: 'var(--white)',
  topBar: false,
  bottomBar: false
}

export default ScreenBody
