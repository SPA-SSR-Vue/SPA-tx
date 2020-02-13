const mongoose = require('mongoose')
const bannerSchema = new mongoose.Schema({
  channel: { type: mongoose.SchemaTypes.ObjectId, ref: 'Channel' },
  banner: {
    name: { type: String },
    items: [
      {
        title: { type: String },
        imgUrl: { type: String },
        targetUrl: { type: String },
      }
    ]
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Banner', bannerSchema, 'banners')