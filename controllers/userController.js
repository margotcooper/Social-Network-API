const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

const userCount = async () => {
  User.aggregate()
    .count("userCount")
    .then((numberOfUsers) => numberOfUsers);
};

module.exports = {
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        const userObject = {
          users,
          userCount: await userCount(),
        };
        return res.json(userObject);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
};
