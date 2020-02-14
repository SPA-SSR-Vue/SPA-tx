module.exports = options => {
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const AdminUser = require('./../../../libs/db/models/AdminUser')

  return async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '请先登录')
    const data = jwt.verify(token, req.app.get('SECRET'))
    assert(data, 401, '请先登录')
    const user = await AdminUser.findById(data.id)
    assert(user, 401, '请先登录')
    req.user = user
    next()
  }
}