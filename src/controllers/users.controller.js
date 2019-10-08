import userService from '../services/postgres/users.service';
import { pick } from 'lodash';

const FILEDS_TO_UPDATE = ['name'];

export async function createUser(req, res) {
  try {
    const result = await userService.create(req.body);
    res.status(201);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

export async function getUserById(req, res) {
  try {
    const result = await userService.get(req.params.id);
    res.status(200);
    res.json(result);
  } catch (error) {
    res.json(error);  
  }
};

export async function updateUser(req, res) {
  try {
    const data = pick(req.body, FILEDS_TO_UPDATE);
    await userService.update(req.params.id, data);
    res.status(202);
    res.send();
  } catch (error) {
    res.json(error);
  }
}