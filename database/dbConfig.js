require("dotenv").config();
const knex = require("knex");
const knexConfig = require("../knexfile");

const stage = process.env.DB_ENV || "development";

module.exports = knex(knexConfig[stage]);
