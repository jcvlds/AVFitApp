const crypto = require('crypto')
// const knex = require('knex')(require('./../knexfile').development)
const knex = require('../knex')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  // async registerUser ({ username, password }) {
  saltHashPassword,
  async registerUser (req, res) {
    const { name, username, email, password } = req.body
    // console.log(`Add user ${req.body.username} with password ${req.body.password}`)

    const { salt, hash } = saltHashPassword({ password })

    try {
      return knex('users')
        .select({
          username: 'users.username',
          email: 'users.email'
        })
        .where({ username })
        .orWhere({ email })
        .then(([user]) => {
          if (user) {
            if (user.username === username) {
              res.status(401).send({
                error: `Username: ${user.username} already exists`
              })
            } else if (user.email === email) {
              res.status(401).send({
                error: `Email: ${user.email} already exists`
              })
            }
          } else if (!user) {
            return knex('users')
            // .returning(['username', 'email', 'password', 'updated_at', 'created_at'])
              .returning('id')
              .insert({
                salt,
                encrypted_password: hash,
                name,
                username,
                email
              })
            // .debug()
              .then((id) => {
                return knex('users')
                  .select({
                    id: 'users.id',
                    name: 'users.name'
                  })
                  .where({ id, username })
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
                        userInfo: user,
                        token: jwtSignUser({ user }),
                        message: 'Registered user successfully!'
                      })
                    }
                  })
              })
          }
        })
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'Error: err'
      })
    }
  },
  async authenticate (req, res) {
    console.log(`Authenticating ${req.body.username}`)
    console.log(req.body)
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
              const userInfo = {
                id: user.id,
                name: user.name
              }
              res.status(200).send({
                // success: hash === user.encrypted_password,
                // userInfo: {
                //   id: user.id
                //   username: user.username,
                //   email: user.email
                // },
                userInfo,
                token: jwtSignUser({ userInfo }),
                message: `Hello ${user.username}! You are logged in!`
              })
              // res.cookie('jwt', jwt, { httpOnly: true, secure: true })
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
