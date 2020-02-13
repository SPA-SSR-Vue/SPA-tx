module.exports = app => {
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const User = require('./../../../libs/db/models/User')

  return async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 422, '权限不足')
    const data = jwt.verify(token, app.get('SECRET'))
    assert(data, 422, '权限不足')
    const user = await User.findById(data.id)
    assert(user, 422, '权限不足')
    req.user = user
    next()
  }
}