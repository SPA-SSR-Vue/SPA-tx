const mongoose = require('mongoose')
const articleSchema = new mongoose.Schema({
  title: { type: String },
  content: { type: String },
  covers: [{ type: String }],
  author: { type: mongoose.SchemaTypes.ObjectId, ref: 'Author' },
  channels: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Channel' }],
  tags: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Tag' }],
}, {
  timestamps: true
})

module.exports = mongoose.model('Article', articleSchema, 'articles')
