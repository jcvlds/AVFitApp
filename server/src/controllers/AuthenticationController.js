const crypto = require('crypto')
// const knex = require('knex')(require('./../knexfile').development)
const knex = require('../knex')
module.exports = {
  // async registerUser ({ username, password }) {
  saltHashPassword,
  async registerUser (req, res) {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    console.log(`Add user ${req.body.username} with password ${req.body.password}`)

    const { salt, hash } = saltHashPassword({ password })

    try {
      return knex('users').insert({
        salt,
        encrypted_password: hash,
        username,
        email
      }).debug()
        .then(() => {
          res.status(200).send({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            message: 'Created user!'
          })
        })
    } catch (err) {
      console.log(err)
      res.status(500).send({
        message: 'Error: err'
      })
    }
  },
  async authenticate (req, res) {
    console.log(`Authenticating ${req.body.username}`)
    const { username, password } = req.body
    try {
      return knex('users').where({ username }).debug()
        .then(([user]) => {
          if (!user) {
            res.status(401).send({
              message: 'Username not found'
            })
          } else {
            const { hash } = saltHashPassword({
              password,
              salt: user.salt
            })
            res.status(200).send({
              success: hash === user.encrypted_password,
              message: `Hello ${user.username}! You are logged in!`
            })
          }
        })
    } catch (err) {
      console.log(err)
      res.status(500).send({
        message: 'Error: err'
      })
    }
  }
}

function saltHashPassword ({
  password,
  salt = randomString()
}) {
  const hash = crypto
    .createHmac('sha512', salt)
    .update(password)
  return {
    salt,
    hash: hash.digest('hex')
  }
};

function randomString () {
  return crypto.randomBytes(4).toString('hex')
}
