module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const authMiddleware = require('./../../middleware/auth')()
  const resourceMiddleware = require('./../../middleware/resource')()
  const controller = require('./crud.controller')

  router
    .post('/', controller.create)
    .get('/', controller.findAll)
    .get('/:id', controller.findOne)
    .put('/:id', controller.update)
    .delete('/:id', controller.remove)

  app.use('/admin/api/rest/:resource', authMiddleware, resourceMiddleware, router);
}