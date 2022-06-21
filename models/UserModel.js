const mongoose = require("mongoose");

// creating the Schema
const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date_created: { type: Date, required: true, default: Date.now },
  phonenumber: { type: String, required: false },
  photoURL: { type: String, required: false },
});

// creating the model
const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
