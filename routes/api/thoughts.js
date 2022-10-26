const router = require("express").Router();

const {
  getAllThoughts,
  getSingleThought,
  //confused about instructions for newThought: POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
  newThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtsController.js");
