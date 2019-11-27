const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationController.registerUser)

  app.post('/login',
    AuthenticationController.authenticate)

  // app.post('/createUser',
  // (req, res) => {
  // AuthenticationController.registerUser
  // {
  // username: req.body.username,
  // password: req.body.password
  // })
  // .then(() => res.sendStatus(200))
  // }
  // )

  // app.post('/register',
  //   AuthenticationControllerPolicy.register,
  //   AuthenticationController.register)
}
