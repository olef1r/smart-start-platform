import { Projects } from '../../models/postgres';

function create(model) {
  return Projects.create(model);
};

function get(id) {
  return Projects.findOne({ where: { id } })
};

function update(id, body) {
  return Projects.update(body, { where: { id } });
};

export default {
  create,
  get,
  update
}