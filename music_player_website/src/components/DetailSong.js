import React, { useContext } from "react";
import { Songs } from "../Context";

export default function DetailSong() {
  const { song } = useContext(Songs);

  if (!song) {
    return <div>Loading...</div>;
  }

  return (
    <div className="col-span-1 p-3">
      <h2 className="text-purple-50 font-bold">Bài hát đang phát</h2>
      <h2 className="text-green-50 text-2xl">{song.name}</h2>
      <div className="w-[190px] m-auto mt-10">
        <img className="w-full" src={song.links.images[0].url} alt="avatar" />
      </div>
      <div className="flex justify-center items-center mt-5">
        <img
          className="w-[60px] rounded-full"
          src={song.links.images[1].url}
          alt="avatar"
        />
        <span className="text-xl text-white px-2 ">{song.author}</span>
      </div>
    </div>
  );
}
