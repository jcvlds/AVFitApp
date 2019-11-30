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
      return knex('users')
        // .returning(['username', 'email', 'password', 'updated_at', 'created_at'])
        .returning('id')
        .insert({
          salt,
          encrypted_password: hash,
          username,
          email
        })
      // .debug()
        .then((id) => {
          return knex('users')
            .select({
              id: 'users.id',
              username: 'users.username',
              email: 'users.email'
            })
            .where({ id })
            .then(([user]) => {
              if (!user) {
                res.status(401).send({
                  error: 'User was not created successfully'
                })
              } else {
                res.status(200).send({
                // username: req.body.username,
                // email: req.body.email,
                // password: req.body.password,
                  user: user,
                  token: '',
                  message: 'Registered user successfully!'
                })
              }
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
      return knex('users').where({ username })
      // .debug()
        .then(([user]) => {
          if (!user) {
            res.status(403).send({
              error: 'Username is incorrect'
            })
          } else {
            const { hash } = saltHashPassword({
              password,
              salt: user.salt
            })
            const isPasswordValid = hash === user.encrypted_password
            if (!isPasswordValid) {
              return res.status(403).send({
                error: 'The password was incorrect'
              })
            } else {
              res.status(200).send({
                // success: hash === user.encrypted_password,
                user: {
                  username: user.username,
                  email: user.email
                },
                token: '',
                message: `Hello ${user.username}! You are logged in!`
              })
            }
          }
        })
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'Error: err'
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
