console.log('initializing server')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mysql = require('mysql')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'jcuser',
  password: 'password',
  database: 'av_fit_app'
})
db.connect(function (err) {
  // if (err) throw err
  if (err !== null) {
    console.log('MYSQL Error connecting to mysql:' + err + '/n')
  } else {
    console.log('db connected')
  }
})

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

require('./routes')(app)

app.set('port', process.env.PORT || 8081)
const server = app.listen(app.get('port'), () => {
  console.log(`server started on ${server.address().port}`)
})
