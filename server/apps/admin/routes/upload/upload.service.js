module.exports = {
  async upload(req) {
    const url = `http://localhost:3000/uploads/${req.file.filename}`
    return {
      success: true,
      message: '上传成功',
      url
    }
  }
}