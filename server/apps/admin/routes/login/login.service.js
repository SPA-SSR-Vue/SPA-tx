const AdminUser = require('./../../../../libs/db/models/AdminUser')
const assert = require('http-assert')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function login(req, username, password) {
  const adminUser = await AdminUser.findOne({ username }).select('+password')
  assert(adminUser, 422, "用户不存在")
  const isValid = bcrypt.compareSync(password, adminUser.password)
  assert(isValid, 422, '密码错误')
  const token = jwt.sign({ id: adminUser._id }, req.app.get('SECRET'))
  return token
}

module.exports = {
  login
}