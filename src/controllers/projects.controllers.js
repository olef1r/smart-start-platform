import projectsService from '../services/postgres/projects.services';
import { pick } from 'lodash';

const FILEDS_TO_UPDATE = ['name'];

export async function createProject(req, res) {
  try {
    const result = await projectsService.create(req.body);
    res.status(201);
    res.json(result);
  } catch(error) {
    res.json(error);
  }
};

export async function getProjectById(req, res) {
  try {
    const result = await projectsService.get(req.params.id);
    res.status(200);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

export async function updateProject(req, res) {
  try {
    const data = pick(req.body, FILEDS_TO_UPDATE);
    await projectsService.update(req.params.id, data);
    res.status(202);
    res.send();
  } catch (error) {
    res.json(error)
  }
};