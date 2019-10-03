import userService from '../services/postgres/users.service';

export async function createUser(req, res) {
  try {
    const result = await userService.create(req.body);
    res.status(201);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

export async function getUser(req, res) {
  try {
    const result = await userService.get(req.params.id);
    res.status(200);
    res.json(result);
  } catch (error) {
    res.json(error);  
  }
};