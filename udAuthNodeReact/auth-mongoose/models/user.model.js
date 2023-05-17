const mongoose = require("mongoose");

// USER SCHEMA
const userSchema = new mongoose.Schema({
  first_name: String, last_name: String,
  email: {type: String, unique: true}, password: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
