module.exports = {
  // async registerUser ({ username, password }) {
  async registerUser (req, res) {
    console.log(`Add user ${req.body.username} with password ${req.body.password}`)
    // return Promise.resolve()
    res.status(200).send({
      username: req.body.username,
      password: req.body.password,
      message: 'Created user!'
    })
  }
}
