import React, { useState, useEffect } from "react";
import Player from "./Components/Player";
import "./style.css";

const App = () => {
  const [songs, setSongs] = useState([
    {
      title: "Age Of Darkness",
      artist: "Exodus Music and Sound",
      image: "https://songsara.net/wp-content/uploads/2022/04/Exodus-Music-and-Sound-Gothika-400x400.jpg",
      url: "https://dl.songsara.net/FRE/2022/8/Exodus%20Music%20and%20Sound%20-%20Gothika%20(2021)%20SONGSARA.NET/01%20Age%20Of%20Darkness.mp3",
    },
    {
      title: "Awaken The Wonder",
      artist: "Exodus Music and Sound",
      image: "https://songsara.net/wp-content/uploads/2022/04/Exodus-Music-and-Sound-Awaken-The-Wonder-300x300.jpg",
      url: "https://dl.songsara.net/FRE/2022/8/Exodus%20Music%20and%20Sound%20-%20Awaken%20The%20Wonder%20(2021)%20SONGSARA.NET/01%20Awaken%20The%20Wonder.mp3",
    },
    {
      title: "Just a Legend",
      artist: "Atom Music Audio",
      image: "https://songsara.net/wp-content/uploads/2022/04/Atom-Music-Audio-Immortals-II-300x300.jpg",
      url: "https://dl.songsara.net/FRE/2022/8/Atom%20Music%20Audio%20-%20Immortals%20II%20(2022)%20SONGSARA.NET/01%20Just%20a%20Legend.mp3",
    },
  ]);
  const [currentSong, setCurrentSong] = useState(2);
  const [nextSong, setNextSong] = useState(
    currentSong + 1 > songs.length - 1 ? 0 : currentSong + 1
  );
  useEffect(() => {
    setNextSong(currentSong + 1 > songs.length - 1 ? 0 : currentSong + 1);
  }, [currentSong]);

  return (
    <div className="player">
      <Player 
      currentSong={currentSong} 
      nextSong={nextSong} 
      songs={songs}
      setCurrentSong={setCurrentSong}
      />
    </div>
  );
};

export default App;
