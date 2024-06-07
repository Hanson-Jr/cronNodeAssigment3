const mongoose = require ("mongoose")

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  dateOfBirth: Date
})

const User = mongoose.model("User", UserSchema)

module.exports = User