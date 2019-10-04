import projectsService from '../services/postgres/projects.services';

export async function createProject(req, res) {
  try {
    const result = await projectsService.create(req.body);
    res.status(201);
    res.json(result);
  } catch(error) {
    res.json(error);
  }
};

export async function getProject(req, res) {
  try {
    const result = await projectsService.get(req.params.id);
    res.status(200);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};