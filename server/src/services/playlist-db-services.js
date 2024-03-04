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

export async function updatePlaylist(name, nuevaPlaylist){
  const updatedPlaylist = await Playlist.findOneAndUpdate({name: name }, nuevaPlaylist);
  if(updatePlaylist){
    return{success: true, message: 'PlayList updated successfully'};
  }else{
    return{success: false, message: 'Error updating PlayList'};
  }
}

