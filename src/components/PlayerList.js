import React from 'react'
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

const PlayerIcon = () => {
  const color = colors[Math.floor(Math.random()*colors.length)]
  return (
    <div className="PlayerIcon" style={{backgroundColor: color}} />
  )
}

const PlayerList = ({ players }) => (
  <div className="PlayerList">
    <div className="title">Current Players</div>
    <ul className="PlayerList-list">
      {players.map(player =>
        <li
          className="PlayerList-player"
        >
          <PlayerIcon />
          <span className="player-name">{player.name}</span>
        </li>
      )}
    </ul>
  </div>
)

export default PlayerList
