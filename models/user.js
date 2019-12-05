const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user_email: {
    type: String,
    required: true,
    unique: true
  },
  user_fullname: {
    type: String,
    required: true,
    default: "Given name"
  },
  user_password: {
    type: String,
    required: true
  },
  admin_role: {
    type: Boolean,
    default: true
  }
});
module.exports = mongoose.model("User", UserSchema);
