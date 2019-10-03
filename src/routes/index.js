import express from 'express';
import users  from './users';
import projects  from './projects';

const router = express.Router();

router.use('/users', users);
router.use('/projects', projects);

export default router;