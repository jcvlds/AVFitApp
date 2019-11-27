const crypto = require('crypto')
const knex = require('knex')(require('./../knexfile'))
module.exports = {
  // async registerUser ({ username, password }) {
  saltHashPassword,
  async registerUser (req, res) {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    console.log(`Add user ${req.body.username} with password ${req.body.password}`)

    const { salt, hash } = saltHashPassword(password)

    try {
      return knex('users').insert({
        salt,
        encrypted_password: hash,
        username,
        email
      }).then(() => {
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
  }
}

function saltHashPassword (password) {
  const salt = randomString()
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
