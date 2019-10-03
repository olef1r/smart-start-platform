import { Projects } from '../../models/postgres';

function create(model) {
  console.log("234",model)
  return Projects.create(model);
};

export default {
  create
}