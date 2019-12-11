const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const UpdatePassPolicy = require('./policies/UpdatePassPolicy')
const isAuthenticated = require('./policies/isAuthenticated')
const MembersController = require('./controllers/MembersController')
const AccountDataController = require('./controllers/AccountDataController')

module.exports = (app) => {
  app.post('/registerUser',
    AuthenticationControllerPolicy.registerUser,
    AuthenticationController.registerUser)

  app.post('/login',
    AuthenticationController.authenticate)

  app.get('/', (req, res) => {
    res.status(200).send({
      success: true
    })
  })

  app.get('/userAccountData',
    isAuthenticated,
    AccountDataController.getData)
  app.post('/userAccountEditName',
    isAuthenticated,
    UpdatePassPolicy.editName,
    AccountDataController.editName)
  app.post('/userAccountEditUsername',
    isAuthenticated,
    UpdatePassPolicy.editUsername,
    AccountDataController.editUsername)
  app.post('/userAccountEditEmail',
    isAuthenticated,
    UpdatePassPolicy.editEmail,
    AccountDataController.editEmail)
  app.post('/userAccountEditPassword',
    isAuthenticated,
    UpdatePassPolicy.editPassword,
    AccountDataController.editPassword)

  app.get('/members',
    isAuthenticated,
    MembersController.index)

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
