module.exports = {
  async upload(req, res) {
    req.file.url = `http://localhost:3000/uploads/${req.file.filename}`
    return res.send(req.file);
  }
}