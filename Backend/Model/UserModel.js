const mongoose = require('mongoose');
<<<<<<< HEAD

=======
const bcrypt = require('bcryptjs');
>>>>>>> 8aa62bad2ef001eb2148408f4f3324c5807d11a3

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

<<<<<<< HEAD
const User = mongoose.model('User', userSchema);

module.exports = User;

 
=======
// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', userSchema);
>>>>>>> 8aa62bad2ef001eb2148408f4f3324c5807d11a3
