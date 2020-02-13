const mongoose = require('mongoose')
const resCommentSchema = new mongoose.Schema({
  belong: { type: mongoose.SchemaTypes.ObjectId, ref: 'Comment' },
  content: { type: String },
  user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

module.exports = mongoose.model('Response', resCommentSchema, 'responses')