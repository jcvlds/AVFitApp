console.log('initializing server')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./db')

require('./routes')(app)

app.set('port', process.env.PORT || 8081)
const server = app.listen(app.get('port'), () => {
  console.log(`server started on ${server.address().port}`)
})
