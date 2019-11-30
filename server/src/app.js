console.log('initializing server')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// require('./db/db')

require('./routes')(app)

app.set('port', config.port)
const server = app.listen(app.get('port'), () => {
  console.log(`server started on ${server.address().port}`)
})
