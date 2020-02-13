const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({
  content: { type: String },
  like: { type: Number },
  article: { type: mongoose.SchemaTypes.ObjectId, ref: 'Article' },
  user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

module.exports = mongoose.model('Comment', commentSchema, 'comments')