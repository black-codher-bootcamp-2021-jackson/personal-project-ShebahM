const mongoose = require("mongoose");
const { Schema } = mongoose;

const healthSchema = new Schema({
  username: String,
  pressure: Number,
  sugar: Number

});

const Health = mongoose.model("users", healthSchema);

module.exports = Health;