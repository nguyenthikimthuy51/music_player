import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import DetailSong from "./components/DetailSong";
import ListSongs from "./components/ListSongs";
import Playing from "./components/Playing";
import { Songs } from "./Context";
import { useState, useEffect } from "react";
import { database } from "./firebase";
import { get, ref, child, onValue } from "firebase/database";

function App() {
  const [DataSongs, setDataSongs] = useState([]);
  const [song, setSong] = useState(null);
  
  useEffect(() => {
    const songsRef = ref(database);
    console.log(database);
    onValue(songsRef, (snapshot) => {
      const data = snapshot.val();
      
      if (data) {
        const songs = Object.values(data);
        console.log(songs)
        setDataSongs(songs);
        setSong(songs[0]);
      }
    });
  }, []);

  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (song) {
      setSong(song);
    }
  };

  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSongs />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
