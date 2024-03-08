import express from "express";
import { createSongController, deleteSongController, getSongByNameController, getSongsController, updateSongController } from "../controllers/songs-controller.js";
import { checkToken } from "../middlewares/auth-middleware.js";
import {isAdmin} from '../middlewares/admin-middleware.js';


const router = express.Router();

router.post("/", isAdmin,createSongController);
router.get("/:name", checkToken, getSongByNameController);
router.get("/", checkToken, getSongsController);
router.delete("/", isAdmin, deleteSongController);
router.patch('/:name', isAdmin, updateSongController);

export default router;
