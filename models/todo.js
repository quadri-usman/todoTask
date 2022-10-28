const faker = require("faker");
const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    // _id: Number,
    title: String,
    description: String,
    page: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todoSchema);
