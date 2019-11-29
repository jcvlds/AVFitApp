const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.registerUser,
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
