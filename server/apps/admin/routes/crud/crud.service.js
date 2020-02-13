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
    const items = await req.Model.find()
    res.send(items);
  },

  async remove(req, res) {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      message: '删除成功'
    });
  }
}