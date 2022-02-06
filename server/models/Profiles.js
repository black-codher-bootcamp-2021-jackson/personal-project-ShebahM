const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  username: String,
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  date:{
    type:Date,
    default:Date.now
  }

});

const Profile = mongoose.model("profiles", profileSchema);

module.exports = Profile;
