const router = require("express").Router();

const {
  getUsers,
  getSingleUserInfo,
  newUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController.js");
