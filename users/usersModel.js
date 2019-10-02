const db = require("../database/dbConfig");

module.exports = {
  getAll,
  insert,
  findById,
  remove,
  update
};

const getAll = async () => {
  return db("users");
};

const insert = async user => {
  const [id] = await db("users").insert(user);
  return findById(id);
};

const findById = id => {
  return db("users")
    .where({ id })
    .first();
};

const remove = id => {
  return db("users")
    .where({ id })
    .del();
};

const update = async (id, user) => {
  await db("users")
    .update(user)
    .where({ id });
  return findById(id);
};
