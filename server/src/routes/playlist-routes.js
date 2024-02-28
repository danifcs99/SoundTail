import express from 'express';
import { createPlaylistController, deletePlaylistController, getPlaylistByNameController, getPlaylistsController } from '../controllers/playlist-controller.js';
import { checkToken } from '../middlewares/auth-middleware.js';

const router = express.Router();

router.post('/', createPlaylistController);
router.get('/:name',checkToken ,getPlaylistByNameController);
router.get('/', checkToken,getPlaylistsController);
router.delete("/", checkToken, deletePlaylistController);

export default router;
