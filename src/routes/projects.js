import express from 'express';
import { createProject, getProjectById, updateProject } from '../controllers/projects.controllers';

const routes = new express.Router();

routes.post('/', createProject);
routes.get('/:id', getProjectById);
routes.patch('/:id', updateProject);

export default routes;