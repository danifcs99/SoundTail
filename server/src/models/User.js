import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  likeSongs: {type: [String], default: []},
  playlist: {type: [String], default: []},
  role: {type: String, required: true, default: 'user'},
}, {timestamps: true});

export default model('User', userSchema);

