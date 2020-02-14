const User = require('./../../../../libs/db/models/User')

module.exports = {
  async create(req, res) {
    await req.Model.create(req.body)
    res.send({
      message: '创建成功'
    });
  },

  async update(req, res) {
    await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send({
      message: '修改成功'
    });
  },

  async findOne(req, res) {
    const item = await req.Model.findById(req.params.id)
    res.send(item);
  },

  async findAll(req, res) {
    let options = {}
    if (req.query.query) {
      console.log(req.query.query);
      const q = JSON.parse(req.query.query)
      options = q
      console.log(options);
    }
    const total = await req.Model.countDocuments(options.where || {})
    const items = await req.Model.find().setOptions(options).where(options.where || {})
    res.send({
      data: items,
      total
    });
  },

  async remove(req, res) {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      message: '删除成功'
    });
  }
}