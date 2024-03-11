import express from 'express';
import { createPlaylistController, deletePlaylistController, getPlaylistByNameController, getPlaylistsController, updatePlaylistController } from '../controllers/playlist-controller.js';
import { checkToken } from '../middlewares/auth-middleware.js';
import isAdmin from '../middlewares/admin-middleware.js';

const router = express.Router();

router.post('/', createPlaylistController);
router.get('/:name',checkToken ,getPlaylistByNameController);
router.get('/', checkToken,getPlaylistsController);
router.delete("/", isAdmin, deletePlaylistController);
router.patch('/:name', isAdmin, updatePlaylistController);

export default router;
