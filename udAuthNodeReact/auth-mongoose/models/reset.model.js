const mongoose = require("mongoose");

// RESET SCHEMA
const resetSchema = new mongoose.Schema({
  email: String, token: {type: String, unique: true},
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Reset", resetSchema);
