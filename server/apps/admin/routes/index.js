module.exports = app => {
  // router
  require('./crud')(app)
  require('./login')(app)
  require('./upload')(app)
}