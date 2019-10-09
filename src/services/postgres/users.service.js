import { Users } from '../../models/postgres';

function create(model) {
  const res = Users.create(model);
  return res
};

function get(id) {
  return Users.findOne({ where: { id } })
};

function update(id, body) {
  return Users.update(body, { where: { id } });
};


// async function getAll(page = DEFAULT_PAGE, pageSize = DEFAULT_PAGE_SIZE, filters) {
//   const offset = pageSize * (page - 1);
//   const limit = pageSize;
//   const where = filters;
//   const result = await Users.findAndCountAll({
//     where,
//     offset,
//     limit
//   });
//   return createPagination(result.rows, +page, pageSize, result.count);
// }

export default {
  create,
  get, 
  update
};