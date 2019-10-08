import { UsersProjects } from '../../models/postgres';

function create(model){
  return UsersProjects.create(model);
}

export default {
  create
}