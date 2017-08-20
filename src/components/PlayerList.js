import React from 'react'
import UserColor from './UserColor'
import UserName from './Username'
import './PlayerList.css'

const colors = [
  'firebrick',
  'hotpink',
  'tomato',
  'peachpuff',
  'thistle',
  'darkorchid',
  'plategreen',
  'mediumaquamarine',
  'plateturquoise',
  'lightsteelblue',
  'wheat',
  'mistyrose'
]

const PlayerList = ({ userIds }) => (
  <div className="PlayerList">
    <div className="title">Current Players</div>
    <ul className="PlayerList-list">
      {userIds.map(userId =>
        <li
          className="PlayerList-player"
        >
          <UserColor userId={userId} />
          <UserName userId={userId} />
        </li>
      )}
    </ul>
  </div>
)

export default PlayerList
