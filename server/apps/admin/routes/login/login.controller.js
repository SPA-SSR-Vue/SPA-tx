module.exports = app => {
  const express = require('express')
  const controller = express.Router()
  const service = require('./login.service')

  controller.post('/', service.login)

  app.use('/admin/api/login', controller);
}