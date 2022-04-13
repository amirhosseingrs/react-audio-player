import React, {useState, useRef, useEffect} from 'react'
import PlayerControls from './PlayerControls'
import PlayerDetails from './PlayerDetails'

const Player = (props) => {
  const [isplaying, setIsplaying] = useState(false)
  const elaudio = useRef(null)
  useEffect(() => {
    if (isplaying) {
      elaudio.current.play()
    } else {
      elaudio.current.pause()
    }
  }, [isplaying])

  useEffect(() => {
    isplaying && elaudio.current.play() 
  })
  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSong(props.currentSong + 1 > props.songs.length - 1 ? 0 : props.currentSong + 1)
    }else {
      props.setCurrentSong(props.currentSong - 1 < 0 ? props.songs.length - 1 : props.currentSong - 1)
    }
  }

  return (
    <div className='player-box'>
        <h1 className='player-title'>Playing Now</h1>
        <audio src={props.songs[props.currentSong].url} ref={elaudio}></audio>
        <PlayerDetails song={props.songs[props.currentSong]} />
        <PlayerControls isplaying={isplaying} setIsplaying={setIsplaying} SkipSong={SkipSong} />
        <p className="nextSongSection">Next Song : {props.songs[props.nextSong].title} by {props.songs[props.nextSong].artist}</p>
    </div>
  )
}

export default Player