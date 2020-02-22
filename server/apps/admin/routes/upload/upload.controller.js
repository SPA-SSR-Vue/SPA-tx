const service = require('./upload.service')

async function upload(req, res) {
  const result = await service.upload(req)
  res.send(result);
}


module.exports = {
  upload
}