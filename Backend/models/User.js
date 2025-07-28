// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  photoURL: String,
  uid: { type: String, unique: true },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema,"loginusers");
