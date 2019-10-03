import projectsService from '../services/postgres/projects.services';

export async function createProject(req, res) {
  try {
    console.log(req.body)
    const result = await projectsService.create(req.body);
    res.status(201);
    res.json(result);
  } catch(error) {
    res.json(error);
  }
};