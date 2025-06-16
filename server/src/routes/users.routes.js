const express = require("express");
const UserModel = require("../models/user.model");
const userRoutes = express.Router();
const usersController = "../controllers/users.controller.js";

userRoutes.get("/", async (req, res) => {
  const allUser = await UserModel.find();
  res.send(allUser);
});

module.exports = userRoutes;
