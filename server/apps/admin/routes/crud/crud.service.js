async function create(req, body) {
  const item = await req.Model.create(body)
  return item
}

async function update(req, id, body) {
  const item = await req.Model.findByIdAndUpdate(id, body)
  return item
}

async function remove(req, id) {
  const item = await req.Model.findByIdAndDelete(id)
  return item
}

async function findOne(req, id) {
  const item = await req.Model.findById(id)
  return item
}

async function find(req, queryOptions = {}) {
  const total = await req.Model.countDocuments(queryOptions.where || {})
  const items = await req.Model.find().setOptions(queryOptions)
  return {
    total,
    items
  }
}




module.exports = {
  create,
  update,
  remove,
  findOne,
  find
}