const express = require("express");
const UserModel = require("../models/user.model");
const usersController = require("../controllers/users.controller");
const userRoutes = express.Router();

userRoutes.get("/", usersController.getAllUsers);

module.exports = userRoutes;
