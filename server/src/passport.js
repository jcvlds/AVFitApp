const passport = require('passport')
// const {User} require('./models')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require('./config/config')

// const queries = require('./db/queries')
const knex = require('./knex')

// function strategy () {
//   console.log('shit')
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.authentication.jwtSecret
}, async function (jwtPayload, done) {
  try {
    console.log('test')
    console.log(jwtPayload)
    return knex('users')
      .select({
        id: 'users.id',
        username: 'users.username'
      })
      // .where({ id: jwtPayload.id })
      .where({ id: jwtPayload.userInfo.id })
      .then(([user]) => {
        if (user) {
        // if (user.username === username) {
          // console.log([user])
          // console.log('test')
          return done(null, user)
        }
        if (!user) {
          return done(new Error(), false)
        }
      })
  } catch (err) {
    return done(new Error(), false)
  }
})
)
// }
// module.exports = (app) => {
//   strategy()
//   // app.use(passport.initialize())
// }
module.exports = null
