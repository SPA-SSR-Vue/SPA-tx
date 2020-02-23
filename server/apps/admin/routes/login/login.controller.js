const assert = require('http-assert')
const service = require('./login.service')

async function login(req, res) {
  const { username, password } = req.body
  assert(username, 422, '请填写用户名')
  assert(password, 422, '请填写密码')
  const token = await service.login(req, username, password)
  res.send({
    success: true,
    message: '登陆成功',
    token
  });
}

module.exports = {
  login
}