import React, { useState, useEffect } from 'react';
import corazon from '../assets/img/corazon.png';

const SongCard = ({ song, onSelect }) => {
  const [liked, setLiked] = useState(false);
  const [buttonColor, setButtonColor] = useState('#C8E6C9'); // Color verde claro por defecto

  useEffect(() => {
    const likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
    const isLiked = likedSongs.some(likedSong => likedSong.url === song.song);
    setLiked(isLiked);
    setButtonColor(isLiked ? '#FFCDD2' : '#C8E6C9'); // Cambia el color si está marcado como favorito
  }, [song]);

  const handlePlayButtonClick = () => {
    const songData = {
      url: song.song,
      title: song.name,
      artist: song.artist,
    };
    onSelect(songData);
  };

  const handleLikeButtonClick = (e) => {
    e.stopPropagation(); // Evitar que el evento onClick del contenedor se dispare

    let likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
    if (liked) {
      likedSongs = likedSongs.filter(likedSong => likedSong.url !== song.song);
    } else {
      likedSongs.push(song);
    }
    localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
    
    // Actualizar el estado liked y el color del botón
    setLiked(!liked);
    setButtonColor(!liked ? '#FFCDD2' : '#C8E6C9'); // Cambia el color al marcar/desmarcar
    console.log(`Canción ${liked ? 'eliminada de' : 'añadida a'} favoritos:`, song);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-1" onClick={handlePlayButtonClick}>
      <img src={`/${song.img}`} alt={song.song} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{song.name}</h2>
        <p className="text-gray-600">{song.artist}</p>
        <p className="text-gray-600">Duración: {song.duration}</p>
        <button 
          onClick={handleLikeButtonClick} 
          style={{ backgroundColor: buttonColor }}
          className="text-white px-4 py-2 mt-4 rounded-full flex items-center justify-center hover:bg-gray-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <img src={corazon} alt="Logo" className="w-4" />
        </button>
      </div>
    </div>
  );
};

export default SongCard;
