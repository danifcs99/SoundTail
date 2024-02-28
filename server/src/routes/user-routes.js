import express from 'express';
import { createUserController, getUserByNameController, getUsersController } from '../controllers/users-controller.js';
import { checkToken } from '../middlewares/auth-middleware.js';

const router = express.Router();

router.post('/', createUserController);
router.get('/:name',checkToken ,getUserByNameController);
router.get('/', checkToken, getUsersController);

export default router;
