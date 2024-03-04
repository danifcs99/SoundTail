import { createPlaylist, getPlaylistByName, getPlaylists, deletePlaylist, updatePlaylist } from "../services/playlist-db-services.js";

export async function createPlaylistController(req, res, next) {
  try {
    const body = req.body;
    const playlist = await createPlaylist(body);
    return res.status(201).send(playlist);
  } catch (error) {
    next(error);
  }
}

export async function getPlaylistByNameController(req, res, next) {
  try {
    const playlist = await getPlaylistByName(req.params.name);
    return res.status(200).send(playlist);
  } catch (error) {
    next(error);
  }
}


export async function getPlaylistsController(req, res, next) {
  try {
    const filters = req.query;
    const playlists = await getPlaylists(filters);
    return res.status(200).send(playlists);
  } catch (error) {
    next(error);
  }
}

export async function deletePlaylistController(req, res, next) {
  try {
    const filters = req.query;
    const playlist = await deletePlaylist(filters);
    return res.status(200).send(playlist);
  } catch (error) {
    next(error);
  }
}

export async function updatePlaylistController(req, res, next){
  try{
    const name = req.params.name;
    const newPlaylist = req.body;

    const playlistCambiado = await updatePlaylist(name, newPlaylist);
    return res.status(200).send(playlistCambiado);
  }catch (error){
    next(error);
  }
}
