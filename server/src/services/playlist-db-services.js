import { Playlist } from "../models/index.js";

export async function createPlaylist(playlist){
  const playlistDoc = new Playlist(playlist);
  const createdPlaylist = await playlistDoc.save();
  return createdPlaylist;
}

export async function getPlaylistByName(name){
  const playlist = await Playlist.findOne({name});
  return playlist;
}

export async function getPlaylists(filters){
  const playlists = await Playlist.find(filters);
  return playlists;
}

export async function deletePlaylist(filters) {
  const deletedPlaylist = await Playlist.deleteMany(filters);
  return deletedPlaylist;
}

