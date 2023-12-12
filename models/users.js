const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  phoneNb: String,
  country: String,
  birthday: String,
  gender: String,
  favoriteFoods: [String],
  favoriteDestinations: [String],
  hobbies: [String],
  tripsList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'trips' }],
  password: String,
  token: String,
  
});

const User = mongoose.model('users', userSchema);

module.exports = User;