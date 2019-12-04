
module.exports = {
  async index (req, res) {
    // const { username, email, password } = req.body
    try {
      console.log(req.query)
      res.send({
        message: 'passed authentication'
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error occured'
      })
    }
  }
}
