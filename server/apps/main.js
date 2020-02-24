const express = require('express')
const app = express()

app.use(require('cors')());
app.use(express.json())

app.set('SECRET', 'a2f54e5f7wr10gsv45fc85sd3b4fw1rf5sw9gf');

// static file
app.use('/uploads', express.static(__dirname + '/../public/uploads'));

// db
require('./../libs/db/db')(app)

// web admin routes
require('./web/routes')(app)
require('./admin/routes')(app)

// error catch and handle
app.use('/', (err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    message: err.message
  });
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});