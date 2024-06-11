import Player from "@madzadev/audio-player";

const Player1 = ({ selectedSong }) => {
    console.log('cancion seleccionada',selectedSong);
    if (selectedSong === null) {
        return null; // No renderizar nada si selectedSong es null
    }

    const tracks = [
        {
            url: "/Songs/Brickell.mp3",
            title: "Brickell",
            tags: ["Reggueton"]
        },
        {
            url: "/Songs/SORRY 4 THAT MUCH.mp3",
            title: "SORRY 4 THAT MUCH",
            tags: ["Reggueton"]
        },
        {
            url: "/Songs/Apaga El Cel.mp3",
            title: "Apaga El Cel",
            tags: ["Reggueton"]
        },
        {
            url: "/Songs/Casablanca.mp3",
            title: "Casablanca",
            tags: ["Trap"]
        },
        {
            url: "/Songs/Ey Chory.mp3",
            title: "Ey Chory",
            tags: ["Reggueton"]
        },
        {
            url: "/Songs/Mesmerised.mp3",
            title: "Mesmerised",
            tags: ["Techno"]
        },
        {
            url: "/Songs/Obsessed With You.mp3",
            title: "Obsessed With You",
            tags: ["Trap"]
        },
        {
            url: "/Songs/Would You.mp3",
            title: "Would You",
            tags: ["Techno"]
        },
    ];

    // Encuentra el track a reproducir basado en el título seleccionado
    const trackToPlay = tracks.find(track => track.title === selectedSong.title);

    // Encuentra la posición del track seleccionado en la lista original de tracks
    const selectedSongIndex = tracks.findIndex(track => track.title === selectedSong.title);

    // Determina la siguiente canción en la lista de tracks, si existe
    const nextTrack = selectedSongIndex < tracks.length - 1 ? tracks[selectedSongIndex + 1] : null;

    // Filtra los tracks para excluir el track seleccionado y la siguiente canción (si existe)
    const remainingTracks = tracks.filter((track, index) => index !== selectedSongIndex && index !== (selectedSongIndex + 1));

    // Crea la lista actualizada con trackToPlay al inicio, seguido por nextTrack (si existe) y luego los remainingTracks
    const updatedTrackList = nextTrack 
    ? [trackToPlay, nextTrack, ...remainingTracks] 
    : [trackToPlay, ...remainingTracks];


    const colors = {
        tagsBackground: "#3e32e4",
        tagsText: "#ffffff",
        tagsBackgroundHoverActive: "#6e65f1",
        tagsTextHoverActive: "#ffffff",
        searchBackground: "#18191f",
        searchText: "#ffffff",
        searchPlaceHolder: "#575a77",
        playerBackground: "#676C6C",
        titleColor: "#ffffff",
        timeColor: "#ffffff",
        progressSlider: "#3e32e4",
        progressUsed: "#ffffff",
        progressLeft: "#151616",
        bufferLoaded: "#1f212b",
        volumeSlider: "#3e32e4",
        volumeUsed: "#ffffff",
        volumeLeft: "#151616",
        playlistBackground: "#18191f",
        playlistText: "#575a77",
        playlistBackgroundHoverActive: "#18191f",
        playlistTextHoverActive: "#ffffff",
      };
  return (
    <div className="w-full box-shadow p-4">
        <Player
            key={selectedSong.title}
            trackList={updatedTrackList}
            customColorScheme={colors}
            includeTags={false}
            includeSearch={false}
            showPlaylist={false}
            sortTracks={false}
            autoPlayNextTrack={true}
        />
    </div>
  )
}

export default Player1