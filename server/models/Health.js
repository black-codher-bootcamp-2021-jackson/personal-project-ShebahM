const mongoose = require("mongoose");
const { Schema } = mongoose;

const healthSchema = new Schema({
  username: String,
  bloodpressure: Number,
  bloodsugar: Number

});

const Health = mongoose.model("userdata", healthSchema);

module.exports = Health;