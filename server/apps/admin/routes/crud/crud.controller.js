module.exports = app => {
  const express = require('express')
  const controller = express.Router()
  const service = require('./crud.service')

  controller
    .post('/', service.create)
    .get('/', service.findAll)
    .get('/:id', service.findOne)
    .put('/:id', service.update)
    .delete('/:id', service.remove)

  app.use('/admin/api/rest/:resource', controller);
}
