module.exports = app => {
  const express = require('express')
  const controller = express.Router()
  const service = require('./upload.service')
  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../../../public/uploads' })

  controller.post('/', upload.single('file'), service.upload)

  app.use('/admin/api/uploads', controller);
}