import express from 'express';
import { createProject, getProject } from '../controllers/projects.controllers';

const routes = new express.Router();

routes.post('/', createProject);
routes.get('/:id', getProject);

export default routes;