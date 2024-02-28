import  {createdSong, getSongByName, getSongs, deleteSong} from "../services/song-db-services.js";

export async function createSongController(req, res, next) {
  try {
    const body = req.body;
    const song = await createdSong(body);
    return res.status(201).send(song);
  } catch (error) {
    next(error);
  }
}


export async function getSongByNameController (req, res, next) {
  try {
    const song = await getSongByName(req.params.name);
    return res.status(200).send(song);
  } catch (error) {
    next(error);
  }
}

export async function getSongsController(req, res, next) {
  try {
    const filters = req.query;
    const songs = await getSongs(filters);
    return res.status(200).send(songs);
  } catch (error) {
    next(error);
  }
}

export async function deleteSongController (req, res, next) {
  try {
    const filters = req.query;
    const song = await deleteSong(filters);
    return res.status(200).send(song);
  } catch (error) {
    next(error);
  }
}
