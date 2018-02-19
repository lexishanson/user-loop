const mongoose = require('mongoose');
const { Schema } = mongoose;

// Can add in properties to schemas when we need to
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

// Mongoose will not override existing collections, only create if it doesn't exist.
// creates new model if there are two arguments
// gets existing model if there is one argument
mongoose.model('users', userSchema);
