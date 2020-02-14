module.exports = app => {
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://localhost:27017/spa-tx', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })

  require('require-all')(__dirname + '/models')

  mongoose.connection.on('open', () => {
    console.log('The DB is connecting!');
  })
}

