module.exports = {
  async create(req, body) {
    const item = await req.Model.create(body)
    return item
  },

  async update(req, id, body) {
    const item = await req.Model.findByIdAndUpdate(id, body)
    return item
  },

  async findOne(req, id) {
    const item = await req.Model.findById(id)
    return item
  },

  async findAll(req) {
    const items = await req.Model.find()
    return items
  },

  async remove(req, id) {
    const item = await req.Model.findByIdAndDelete(id)
    return item
  }
}