const express = require("express");
const route = express.Router();

const { getAll, getById, add, remove, update } = require("./usersController");

route.get("/", getAll);
route.get("/:id", getById);
route.post("/", add);
route.put("/:id", update);
route.delete("/:id", remove);

module.exports = route;
