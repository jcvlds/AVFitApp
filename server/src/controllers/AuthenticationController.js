const knex = require('knex')(require('./../knexfile'))

module.exports = {
  // async registerUser ({ username, password }) {
  async registerUser (req, res) {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    console.log(`Add user ${req.body.username} with password ${req.body.password}`)
    try {
      return knex('users').insert({
        username,
        email,
        password
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
    // return Promise.resolve()
  }
}
