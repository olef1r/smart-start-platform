import express from 'express';
import { createUser, getUserById, updateUser } from '../controllers/users.controller';

const router = new express.Router();

router.post('/', createUser);
router.get('/:id', getUserById);
router.patch('/:id', updateUser);

export default router;
