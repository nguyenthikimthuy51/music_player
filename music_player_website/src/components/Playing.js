import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

export default function Playing() {
  const { song, handleSetSong, DataSongs } = useContext(Songs);

  const handleClickNext = () => {
    const nextSongId = song.id + 1;
    const nextSong = DataSongs.find((song) => song.id === nextSongId);
    if (nextSong) {
      handleSetSong(nextSongId);
    }
  };

  const handleClickPre = () => {
    const previousSongId = song.id - 1;
    const previousSong = DataSongs.find((song) => song.id === previousSongId);
    if (previousSong) {
      handleSetSong(previousSongId);
    }
  };
  console.log(song)
  return (
    <div>
      {song && (
        <AudioPlayer
          className="player-music"
          src={song.url}
          layout="stacked-reverse"
          showSkipControls={true}
          showJumpControls={false}
          onClickNext={handleClickNext}
          onClickPrevious={handleClickPre}
        />
      )}
    </div>
  );
}
