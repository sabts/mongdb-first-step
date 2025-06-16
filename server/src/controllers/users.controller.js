const usersController = {};
const UserModel = require("../models/user.model");

usersController.getAllUsers = async (req, res) => {
  const allUser = await UserModel.find();
  res.send(allUser);
};

module.exports = usersController;
