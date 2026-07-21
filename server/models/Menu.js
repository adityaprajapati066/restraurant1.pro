const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
});

module.exports =
  mongoose.models.Menu || mongoose.model("Menu", menuSchema);