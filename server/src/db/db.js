const mysql = require('mysql')

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
