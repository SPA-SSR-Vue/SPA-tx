const mongoose = require('mongoose')
const adminUserSchema = new mongoose.Schema({
  level: { type: Number },
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

module.exports = mongoose.model('AdminUser', adminUserSchema, 'admin_users')