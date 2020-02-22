const service = require('./crud.service')

module.exports = {
  async create(req, res) {
    const body = req.body
    const result = await service.create(req, body)
    res.send(result);
  },

  async update(req, res) {
    const body = req.body
    const id = req.params.id || ''
    const result = await service.update(req, id, body)
    res.send(result);
  },

  async findOne(req, res) {
    const id = req.params.id || ''
    const result = await service.findOne(req, id)
    res.send(result);
  },

  async findAll(req, res) {
    const result = await service.findAll(req)
    res.send(result);
  },

  async remove(req, res) {
    const id = req.params.id || ''
    const result = await service.remove(req, id)
    res.send(result);
  },
}