import express from 'express';
import { createProject } from '../controllers/projects.controllers';

const routes = new express.Router();

routes.post('/', createProject);

export default routes;