const mongoose = require('mongoose')
const channelSchema = mongoose.Schema({
  name: { type: String },
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Channel' },
  alias: { type: String },
}, {
  timestamps: true
})

module.exports = mongoose.model('Channel', channelSchema, 'channels')