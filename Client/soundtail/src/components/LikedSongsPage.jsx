import React, { useState, useEffect } from 'react';
import Header from './Header';
import SongCard from './SongCard';

const LikedSongsPage = () => {
  const [likedSongs, setLikedSongs] = useState([]);

  useEffect(() => {
    const storedLikedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
    setLikedSongs(storedLikedSongs);
  }, []);

  const removeLikedSong = (indexToRemove) => {
    const updatedLikedSongs = likedSongs.filter((_, index) => index !== indexToRemove);
    setLikedSongs(updatedLikedSongs);
    localStorage.setItem('likedSongs', JSON.stringify(updatedLikedSongs));
  };
  
  return (
    <div className="h-screen bg-gradient-to-b from-blue-300 to-blue-500 w-full">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-8 text-white text-center">Tus Canciones Favoritas</h1>
        {likedSongs.length === 0 ? (
          <p className="text-gray-200 text-center">No tienes canciones guardadas como favoritas.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {likedSongs.map((song, index) => (
              <div key={index} className="relative">
                <SongCard
                  song={song}
                  onSelect={() => {}}
                  showLikeButton={false}
                />
                <button
                  className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md"
                  onClick={() => removeLikedSong(index)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default LikedSongsPage;
