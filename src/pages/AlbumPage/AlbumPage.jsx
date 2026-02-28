import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";

export default function AlbumPage() {
  const { albumId } = useParams();
  const { data } = useOutletContext(); 
  const nxtRef = useRef(null);

  const allAlbums = [...data.topAlbums, ...data.newAlbums];
  const albumData = allAlbums.find((album) => album.slug === albumId);

  const [songlist, setSonglist] = useState([]);
  const [count, setCount] = useState({ start: 0, end: 5 });

  const pagination = (direction) => {
    setCount((prev) => {
      if (direction === "nxt") return { start: prev.end, end: prev.end + 5 };
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
      nxtRef.current.disabled = count.end >= albumData.songs.length;
    }
  }, [count, albumData]);

  if (!albumData) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  const { description, follows, image, title, songs } = albumData;

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', color: 'white', padding: '20px 40px' }}>
      
      {/* --- HERO SECTION (The Top Part) --- */}
      <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-end', marginBottom: '40px' }}>
        <img
          src={image}
          alt={title}
          style={{ width: '280px', height: '280px', objectCover: 'cover', borderRadius: '8px', boxShadow: '0 4px 60px rgba(0,0,0,.5)' }}
        />
        <div style={{ textAlign: 'left' }}>
          <h1 style={{ fontSize: '72px', fontWeight: '900', margin: '0 0 10px 0', letterSpacing: '-2px' }}>{title}</h1>
          <p style={{ fontSize: '16px', opacity: '0.8', marginBottom: '8px' }}>{description}</p>
          <p style={{ fontSize: '14px', fontWeight: '600' }}>
            {songs.length} songs · 3 hr 45 min · {follows} Follows
          </p>
          <div style={{ marginTop: '25px', display: 'flex', gap: '15px' }}>
            <button style={{ backgroundColor: '#1DB954', color: 'black', border: 'none', padding: '12px 32px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}>
              SHUFFLE
            </button>
            <button style={{ backgroundColor: 'transparent', color: '#1DB954', border: '1px solid #1DB954', padding: '12px 32px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}>
              ADD TO LIBRARY
            </button>
          </div>
        </div>
      </div>

      {/* --- PAGINATION --- */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px', color: '#1DB954', fontWeight: 'bold', fontSize: '12px' }}>
        <span onClick={() => pagination("prev")} style={{ cursor: 'pointer' }}>PREV</span>
        <span onClick={() => pagination("nxt")} style={{ cursor: 'pointer' }}>NEXT</span>
      </div>

      {/* --- SONG TABLE --- */}
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ color: '#b3b3b3', borderBottom: '1px solid #282828', fontSize: '14px' }}>
            <th style={{ padding: '10px', fontWeight: '400' }}>Title</th>
            <th style={{ padding: '10px', fontWeight: '400' }}>Artist</th>
            <th style={{ padding: '10px', fontWeight: '400', textAlign: 'right' }}>Duration</th>
          </tr>
        </thead>
        <tbody>
          {songlist.map((item) => (
            <tr key={item.id} style={{ borderBottom: '1px solid transparent' }} className="song-row">
              <td style={{ padding: '12px 10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img src={item.image} alt="" style={{ width: '40px', height: '40px', borderRadius: '4px' }} />
                <span style={{ fontWeight: '500' }}>{item.title}</span>
              </td>
              <td style={{ padding: '12px 10px', color: '#b3b3b3', fontSize: '14px' }}>{item.artists[0]}</td>
              <td style={{ padding: '12px 10px', color: '#b3b3b3', fontSize: '14px', textAlign: 'right' }}>{item.durationInMs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}