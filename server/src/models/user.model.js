const mongoose = require("mongoose");

const userSchema = new mongoose.Shema(
  {
    name: { type: String, require: true },
    age: Number,
  },
  { timestamps: true },
  { collection: "users-collection" }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
