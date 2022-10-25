const { Schema, model } = require("mongoose");

//no API for just reactions, can still associate reactions with thoughts, but no end point where just return all reactions.
// const ObjectId = reactionSchema.types.ObjectId;
const reactionSchema = new Schema({
  reactionId: {
    type: ObjectId,
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: (date) => {
      if (date) return date.toISOString().split("T")[0];
    },
  },
});
