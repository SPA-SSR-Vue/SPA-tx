module.exports = app => {
  const express = require('express')
  const controller = express.Router()
  const service = require('./upload.service')
  const authMiddleware = require('./../../middleware/auth')()
  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../../../public/uploads' })

  controller.post('/', authMiddleware, upload.single('file'), service.upload)

  app.use('/admin/api/uploads', controller);
}