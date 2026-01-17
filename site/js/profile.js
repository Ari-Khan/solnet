const mongoose = require("mongoose");


const ProfileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  job: {
    type: String
  },
  country: {
    type: String
  },
  bio: {
    type: String
  },
  skills: {
    type: String
  }
}, {
  timestamps: true
});


module.exports = mongoose.model("Profile", ProfileSchema);