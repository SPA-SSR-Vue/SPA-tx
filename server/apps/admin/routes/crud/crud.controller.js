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

  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`./../../../../libs/db/models/${modelName}`)
    next()
  }, controller);
}
