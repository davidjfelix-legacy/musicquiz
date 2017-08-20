import React from 'react'
import {Link} from 'react-router-dom'

import './index.css'

const CreateGameButton = ({to}) => (
  <Link to={to}>
  <div className='CreateGameButton-button' >
    <h1 style={{ position: 'relative', bottom: '18%', right: '-22%', fontSize: '4em', fontWeight: '300'}}>+</h1>
  </div>
  </Link>

)

export default CreateGameButton;
