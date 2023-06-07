import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";
import { get, ref, child, onValue } from "firebase/database";
import { database } from "../firebase";

export default function ListSongs() {
  const { handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);
  const [DataSongs, setDataSongs] = useState([]);

  useEffect(() => {
    const songsRef = ref(database);
    onValue(songsRef, (snapshot) => {
      const data = snapshot.val();
      console.log(songsRef);
      if (data) {
        const songs = Object.values(data);
        setDataSongs(songs);
      }
    });
  }, []);

  useEffect(() => {
    if (song) {
      setidSong(song.id);
    }
  }, [song]);

  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    handleSetSong(idSong);
  };

  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">STT</th>
            <th className="text-left">Bài hát</th>
            <th className="w-[10%]">Tác giả</th>
            <th className="w-[10%]">Tải về</th>
          </tr>
        </thead>
        <tbody className="listsong">
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`h-12 text-gray-100 hover:bg-purple-500 ${
                idSong === song.id ? "bg-purple-600 text-green-400" : ""
              }`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center hover:text-purple-900">
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
