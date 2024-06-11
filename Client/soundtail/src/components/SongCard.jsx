import corazon from '../assets/img/corazon.png'

const SongCard = ({ song, onSelect }) => {
  const handlePlayButtonClick = () => {
    const songData = {
      url: song.song,
      title: song.name,
      artist: song.artist,
    };
    onSelect(songData);
  };

  const handleLikeButtonClick = () => {
    // Aquí guardamos los datos de la canción en el almacenamiento local
    const likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
    likedSongs.push(song);
    localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
    console.log('Canción añadida a favoritos:', song);
    // Puedes agregar algún mensaje de confirmación aquí
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-1" onClick={handlePlayButtonClick}>
      <img src={`/${song.img}`} alt={song.song} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{song.name}</h2>
        <p className="text-gray-600">{song.artist}</p>
        <p className="text-gray-600">Duración: {song.duration}</p>
        <button onClick={handleLikeButtonClick} className="bg-green-300 text-white px-4 py-2 mt-4 rounded-full flex items-center justify-center hover:bg-green-400 hover:shadow-md">
        <img src={corazon} alt="Logo" className="w-4" />
        </button>
      </div>
    </div>
  );
};

export default SongCard;
