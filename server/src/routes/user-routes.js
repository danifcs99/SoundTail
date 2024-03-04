import express from 'express';
import { createUserController, getUserByNameController, getUsersController, deleteUserController, updateUserController } from '../controllers/users-controller.js';
import { checkToken } from '../middlewares/auth-middleware.js';

const router = express.Router();

router.post('/', createUserController);
router.get('/:name',checkToken ,getUserByNameController);
router.get('/', checkToken, getUsersController);
router.delete('/', checkToken, deleteUserController);
router.patch('/:email', checkToken, updateUserController);

export default router;
