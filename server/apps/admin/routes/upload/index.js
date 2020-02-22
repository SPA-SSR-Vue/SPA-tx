module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const controller = require('./upload.controller')
  const authMiddleware = require('./../../middleware/auth')()
  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../../../public/uploads' })

  router.post('/', controller.upload)

  app.use('/admin/api/uploads', authMiddleware, upload.single('file'), router)
}