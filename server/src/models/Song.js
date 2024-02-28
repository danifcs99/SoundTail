import mongoose from "mongoose";

const { Schema, model } = mongoose;

const songSchema = new Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true },
  song: { type: String, required: true },
  img: { type: String, required: true },
  duration: { type: String, required: true },
}, {timestamps: true});

export default model('Song', songSchema);
