const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  username: { type: String },
  password: {
    type: String,
    select: false,
    set(val) {
      return require('bcryptjs').hashSync(val, 11)
    }
  },
  avatar: { type: String }
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userSchema, 'users')