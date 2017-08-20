import React from 'react'
import UserColor from './UserColor'
import UserName from './Username'
import './PlayerListRow.css'

const PlayerListRow = ({ userId }) => (
  <li key={userId} className="PlayerListRow">
    <UserColor userId={userId} />
    <UserName userId={userId} />
  </li>
)

export default PlayerListRow
