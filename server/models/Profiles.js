const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
    min:6,
    max: 255
  },
  firstname: {
    type: String,
    required: true,
    max: 255
  },
  lastname: {
    type: String,
    required: true,
    max: 255
  },
  email: {
    type: String,
    required: true, 
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  },
  date:{
    type:Date,
    default:Date.now
  }

});

const Profile = mongoose.model("profiles", profileSchema);

module.exports = Profile;
