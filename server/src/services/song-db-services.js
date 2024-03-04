import { Song } from "../models/index.js";

export async function createdSong(song) {
  const songDoc = new Song(song);
  const createdSong = await songDoc.save();
  return createdSong;
}

export async function getSongByName(name) {
  const song = await Song.findOne({name});
  return song;
}

export async function getSongs(filters) {
  const songs = await Song.find(filters);
  return songs;
}

export async function deleteSong(filters) {
  const deleteSong = await Song.deleteMany(filters);
  return deleteSong;
}

export async function updateSong(name, updateSong) {
  const updatedSong = await Song.findOneAndUpdate({name: name}, updateSong);
  if(updatedSong){
    return{success: true, message: 'Song updated successfully'};
  }else{
    return{success: false, message: 'Error updating Song'}
  }
}
