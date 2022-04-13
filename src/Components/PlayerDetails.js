import React from 'react'

const PlayerDetails = (props) => {
  return (
    <div className="player-details">
        <div className="player-details--image">
            <img src={props.song.image} />
        </div>
        <h3 className="player-details--title">
            {props.song.title}
        </h3>
        <h3 className="player-details--artist">
            {props.song.artist}
        </h3>
    </div>
  )
}

export default PlayerDetails