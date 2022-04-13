import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward} from '@fortawesome/free-solid-svg-icons'

const PlayerControls = (props) => {
  return (
    <div className='player-controls'>
        <button onClick={() => props.SkipSong(false)} className='skip-btn'><FontAwesomeIcon icon={faBackward} /></button>
        <button onClick={() => props.setIsplaying(!props.isplaying)} className='play-btn'><FontAwesomeIcon icon={props.isplaying ? faPause : faPlay} /></button>
        <button onClick={() => props.SkipSong(true)} className='skip-btn'><FontAwesomeIcon icon={faForward} /></button>
    </div>
  )
}

export default PlayerControls