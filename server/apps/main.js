const express = require('express')
const app = express()

// db
require('./../libs/db/db')(app)

// admin router
require('./admin/routes')(app)

app.listen(3000, () => {
  console.log('http://localhost:3000');
});