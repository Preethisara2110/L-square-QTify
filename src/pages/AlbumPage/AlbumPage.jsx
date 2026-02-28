import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";

export default function AlbumPage() {
  const { albumId } = useParams();
  const { data } = useOutletContext(); // getting data from App.js
  const nxtRef = useRef(null);

  const allAlbums = [...data.topAlbums, ...data.newAlbums];

  const albumData = allAlbums.find(
    (album) => album.slug === albumId
  );

  const [songlist, setSonglist] = useState([]);
  const [count, setCount] = useState({ start: 0, end: 5 });

  const pagination = (direction) => {
    setCount((prev) => {
      if (direction === "nxt") {
        return { start: prev.end, end: prev.end + 5 };
      }
      if (direction === "prev") {
        return {
          start: Math.max(prev.start - 5, 0),
          end: Math.max(prev.end - 5, 5),
        };
      }
      return prev;
    });
  };

  useEffect(() => {
    if (!albumData) return;

    const list = albumData.songs.slice(count.start, count.end);
    setSonglist(list);

    if (nxtRef.current) {
      nxtRef.current.disabled =
        count.end >= albumData.songs.length;
    }
  }, [count, albumData]);

  if (!albumData) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  const { description, follows, image, title, songs } = albumData;

  return (
    <div className="flex-1 px-10 pt-5">
      <div className="flex gap-3">
        <img src={image} alt={title} className="h-[300px]" />

        <div className="text-amber-50 text-left">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p>{description}</p>
          <p>
            {songs.length} songs · {follows} Follows
          </p>

          <div className="mt-3 flex gap-3">
            <Button variant="contained">Shuffle</Button>
            <Button variant="outlined">Add to library</Button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex gap-4 mb-4">
          <Button onClick={() => pagination("prev")}>Prev</Button>
          <Button onClick={() => pagination("nxt")} ref={nxtRef}>
            Next
          </Button>
        </div>

        <div className="flex justify-between text-white items-center h-[60px] border-b border-cyan-50">
          <span className="flex w-[40%] items-center gap-2">Title</span>
          <span>Artist</span>
          <span>Duration</span>
        </div>

        {songlist.map((item) => (
          <div
            key={item.id}
            className="flex justify-between text-white items-center h-[60px] border-b border-cyan-50"
          >
            <span className="flex w-[40%] items-center gap-2">
              <img src={item.image} alt={item.title} className="w-7" />
              {item.title}
            </span>
            <span>{item.artists[0]}</span>
            <span>{(item.durationInMs / 60000).toFixed(2)} min</span>
          </div>
        ))}
      </div>
    </div>
  );
}