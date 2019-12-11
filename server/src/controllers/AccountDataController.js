const knex = require('../knex')
const crypto = require('crypto')

module.exports = {
  saltHashPassword,
  async getData (req, res) {
    try {
      // console.log('****', req.query, '****')
      const userId = req.query.id

      return knex('users')
        .select({
          name: 'users.name',
          username: 'users.username',
          email: 'users.email'
        })
        .where({ id: userId })
        .then(([user]) => {
          if (!user) {
            res.status(401).send({
              error: 'Error retrieving account details'
            })
          } else {
            res.status(200).send({
            // username: req.body.username,
              userInfo: user
            })
          }
        })
    } catch (err) {
      res.status(500).send({
        error: 'An error occured'
      })
    }
  },

  async editName (req, res) {
    // const { username, email, password } = req.query
    const name = req.body.name
    const userId = req.body.id

    try {
      return knex('users')
        .where({ id: userId })
        .update({
          name: name
        })
        .then((name) => {
          if (!name) {
            res.status(401).send({
              error: 'Error updating name, please try again'
            })
          } else {
            res.status(200).send({
              message: 'Name updated!'
            })
          }
        })
      // returning 'name'
    } catch (err) {
      res.status(500).send({
        error: 'An error occured'
      })
    }
  },

  async editUsername (req, res) {
    // const { username, email, password } = req.query
    const userName = req.body.username
    const userId = req.body.id

    try {
      return knex('users')
        .where({ id: userId })
        .update({
          username: userName
        })
        .then((username) => {
          if (!username) {
            res.status(401).send({
              error: 'Error updating username, please try again'
            })
          } else {
            res.status(200).send({
              message: 'Username updated!'
            })
          }
        })
      // returning 'name'
    } catch (err) {
      res.status(500).send({
        error: 'An error occured'
      })
    }
  },

  async editEmail (req, res) {
    // const { username, email, password } = req.query
    const email = req.body.email
    const userId = req.body.id

    try {
      return knex('users')
        .where({ id: userId })
        .update({
          email: email
        })
        .then((email) => {
          if (!email) {
            res.status(401).send({
              error: 'Error updating email, please try again'
            })
          } else {
            res.status(200).send({
              message: 'Email updated!'
            })
          }
        })
      // returning 'name'
    } catch (err) {
      res.status(500).send({
        error: 'An error occured'
      })
    }
  },

  async editPassword (req, res) {
    // const { username, email, password } = req.query
    const password = req.body.password
    const userId = req.body.id

    try {
      knex('users').select({ salt: 'users.salt' }).where({ id: userId })
        .then((salts) => {
          const salt = salts[0].salt
          console.log(salt)
          const { hash } = saltHashPassword({ password, salt })
          return knex('users')
            .where({ id: userId })
            .update({
              salt: salt,
              encrypted_password: hash
            })
            .then((user) => {
              if (!user) {
                res.status(401).send({
                  error: 'Error updating password, please try again'
                })
              } else {
                res.status(200).send({
                  message: 'Password updated!'
                })
              }
            })
        })
    } catch (err) {
      res.status(500).send({
        error: 'An error occured'
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
