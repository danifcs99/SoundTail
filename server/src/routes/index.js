import express from 'express';
import loginRoutes from './login-routes.js';
import userRoutes from './user-routes.js';
import songRoutes from './song-routes.js';

const router = express.Router();

router.use('/login', loginRoutes);

router.use('/users', userRoutes);

router.use('/songs', songRoutes);

export default router;
