import mongoose from "mongoose";

const { Schema, model } = mongoose;

const playlistSchema = new Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true },
  songs: [
    {
      song_id: { type: String, required: true},
    }
  ],
  img: { type: String }
});

export default model('Playlist', playlistSchema);
