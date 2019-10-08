import projectsService from '../services/postgres/projects.services';
const FILEDS_TO_UPDATE = ['name'];
import { pick } from 'lodash';

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
    await projectsService.update(data);
    res.status(202);
    res.send();
  } catch (error) {
    res.json(error)
  }
};