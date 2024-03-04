import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  likeSongs: {type: [String], default: []},
  playlist: {type: [String], default: []}
}, {timestamps: true});

export default model('User', userSchema);

