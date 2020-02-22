module.exports = {
  async create(req, body) {
    const item = await req.Model.create(body)
    return {
      success: true,
      message: '创建成功',
      data: item
    }
  },

  async update(req, id, body) {
    const item = await req.Model.findByIdAndUpdate(id, body)
    return {
      success: true,
      message: '更新成功',
      data: item
    }
  },

  async findOne(req, id) {
    const item = await req.Model.findById(id)
    return {
      success: true,
      message: '查找成功',
      data: item
    }
  },

  async findAll(req) {
    const items = await req.Model.find()
    return {
      success: true,
      message: '查找成功',
      data: items
    }
  },

  async remove(req, id) {
    const item = await req.Model.findByIdAndDelete(id)
    return {
      success: true,
      message: '删除成功',
      data: item
    }
  }
}