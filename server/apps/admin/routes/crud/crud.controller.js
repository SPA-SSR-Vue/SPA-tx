const service = require('./crud.service')

module.exports = {
  async create(req, res) {
    const body = req.body
    const item = await service.create(req, body)
    res.send({
      success: true,
      message: '创建成功',
      data: item
    });
  },

  async update(req, res) {
    const body = req.body
    const id = req.params.id || ''
    const item = await service.update(req, id, body)
    res.send({
      success: true,
      message: '更新成功',
      data: item
    });
  },

  async remove(req, res) {
    const id = req.params.id || ''
    const item = await service.remove(req, id)
    res.send({
      success: true,
      message: '删除成功',
      data: item
    });
  },

  async findOne(req, res) {
    const id = req.params.id || ''
    const item = await service.findOne(req, id)
    res.send({
      success: true,
      message: '查找成功',
      data: item
    });
  },

  async findAll(req, res) {
    let queryOptions = {}
    if (req.query.query) {
      let { page = 1, size = 0, skip = 0, options = {} } = JSON.parse(req.query.query)
      if (size <= 0) {
        queryOptions = options
      } else {
        skip = (page - 1) * size <= 0 ? 0 : (page - 1) * size
        options.skip = skip
        options.limit = size
        queryOptions = options
      }
    }
    console.log(queryOptions);
    const result = await service.find(req, queryOptions)
    res.send({
      success: true,
      message: '查找成功',
      total: result.total,
      data: result.items
    });
  },


}