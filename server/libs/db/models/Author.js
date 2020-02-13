const mongoose = require('mongoose')
const authorSchema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String }
}, {
  timestamps: true
})

module.exports = mongoose.model('Author', authorSchema, 'authors')