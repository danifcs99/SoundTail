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
