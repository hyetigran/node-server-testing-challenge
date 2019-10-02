const User = require("./usersModel");

module.exports = {
  getAll,
  getById,
  add,
  remove,
  update
};

const getAll = async (req, res) => {
  try {
    const users = await User.getAll();
    res.status(200).json(users);
  } catch (error) {
    const err = {
      message: error.message
    };
    res.status(500).json(err);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    const err = {
      message: error.message
    };
    res.status(500).json(err);
  }
};

const add = async (req, res) => {
  try {
    const newUser = req.body;
    const user = await User.insert(newUser);
    res.status(201).json(user);
  } catch (error) {
    const err = {
      message: error.message
    };
    res.status(500).json(err);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await User.remove(id);
    res.status(201).json({
      message: "User successfully removed"
    });
  } catch (error) {
    const err = {
      message: error.message
    };
    res.status(500).json(err);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = req.body;
    const user = await User.update(id, updatedUser);
    res.status(201).json(user);
  } catch (error) {
    const err = {
      message: error.message
    };
    res.status(500).json(err);
  }
};
