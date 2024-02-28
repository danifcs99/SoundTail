import express from "express";
import { createSongController, getSongByNameController, getSongsController } from "../controllers/songs-controller.js";
import { checkToken } from "../middlewares/auth-middleware.js";


const router = express.Router();

router.post("/", createSongController);
router.get("/:name", checkToken, getSongByNameController);
router.get("/", checkToken, getSongsController);

export default router;
