import React from 'react'
import PlayerListRow from './PlayerListRow'
import './PlayerList.css'

/*const colors = [
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
]*/

const PlayerList = ({ userIds }) => (
  <div className="PlayerList">
    <div className="title">Current Players</div>
    <ul className="PlayerList-list">
      {userIds && userIds.length > 0
        ? userIds.map(userId =>
          <PlayerListRow userId={userId} key={userId}/>)
        : <div className="PlayerList-empty">Game currently has no players. Share the game code with your friends!</div>
      }
    </ul>
  </div>
)

export default PlayerList
