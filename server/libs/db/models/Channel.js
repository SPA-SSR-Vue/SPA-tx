const mongoose = require('mongoose')
const channelSchema = mongoose.Schema({
  name: { type: String },
  alias: { type: String },
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Channel' },
}, {
  timestamps: true
})

module.exports = mongoose.model('Channel', channelSchema, 'channels')