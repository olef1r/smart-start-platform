import { Users } from '../../models/postgres';

function create(model) {
  const res = Users.create(model);
  return res
};

function get(id) {
  return Users.findOne({ where: { id } })
};

export default {
  create,
  get
};