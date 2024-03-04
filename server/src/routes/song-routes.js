import express from "express";
import { createSongController, deleteSongController, getSongByNameController, getSongsController, updateSongController } from "../controllers/songs-controller.js";
import { checkToken } from "../middlewares/auth-middleware.js";


const router = express.Router();

router.post("/", createSongController);
router.get("/:name", checkToken, getSongByNameController);
router.get("/", checkToken, getSongsController);
router.delete("/", checkToken, deleteSongController);
router.patch('/:name', checkToken, updateSongController);

export default router;
