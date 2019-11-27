module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `Hello ${req.body.email}! Your user was registered! Have Fun!`
    })
  })

  app.post('/login', (req, res) => {
    res.send({
      message: `Hello ${req.body.email}! You are logged in!`
    })
  })

  // app.post('/register',
  //   AuthenticationControllerPolicy.register,
  //   AuthenticationController.register)
}
