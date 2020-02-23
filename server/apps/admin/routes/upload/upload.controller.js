const service = require('./upload.service')

async function upload(req, res) {
  const url = await service.upload(req)
  res.send({
    success: true,
    message: '上传成功',
    url
  });
}


module.exports = {
  upload
}