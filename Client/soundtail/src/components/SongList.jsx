import React, { useEffect, useState } from 'react';
import SongCard from './SongCard';
import Player1 from './Player1';

const SongList = ({ onSongSelect  }) => {
  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      // Obtiene el token del almacenamiento local
      const token = localStorage.getItem('token');
  
      // Configura los encabezados de la solicitud con el token de autenticación
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };
  
      try {
        // Realiza la petición a tu API para obtener todas las canciones
        const response = await fetch('https://soundtail.onrender.com/songs/', {
          headers: headers // Incluye los encabezados en la solicitud
        });
        const data = await response.json();
        // Verifica si la respuesta es un array antes de establecer el estado
        if (Array.isArray(data)) {
          setSongs(data);
          setFilteredSongs(data);
        } else {
          console.error('La respuesta de la API no es un array:', data);
        }
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  useEffect(() => {
    // Filtra las canciones según la consulta de búsqueda
    const filtered = songs.filter(song =>
      song.name.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSongs(filtered);
  }, [query, songs]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSongSelect = (songData) => {
    setSelectedSong(songData);
  };

  return (
    <div className="flex flex-col items-center">
      <div className='mb-6'>

      </div>
      <div className="w-full max-w-md mb-6">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          placeholder="Buscar canciones..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full px-4">
        {filteredSongs.map(song => (
          <SongCard key={song._id} song={song} onSelect={handleSongSelect}/>
        ))}
      </div>
      <div className='w-full mb-6'>
        <Player1 selectedSong={selectedSong}/>
      </div>
    </div>
  );
};

export default SongList;
