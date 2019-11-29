const Joi = require('@hapi/joi')

module.exports = {
  registerUser (req, res, next) {
    const schema = Joi.object({
      username: Joi.string().required().min(5).max(30).alphanum(),
      // email: Joi.string().email(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().regex(
        // new RegExp('^[a-zA-Z0-9]{8,32}$')
        new RegExp('^[a-zA-Z0-9!@#$%*]{8,32}$')),
      repeat_password: Joi.ref('password')
    })

    // const emailAndPass = {
    //   email: req.body.email,
    //   password: req.body.password
    // }

    // const { error, value } = Joi.validate(req.body, schema)
    // const { error } = Joi.validate(emailAndPass, schema) old code
    const { error } = schema.validate(req.body)
    if (error) {
      switch (error.details[0].context.key) {
        case 'username':
          res.status(400).send({
            error: 'You must provide a valid username'
          })
          break
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules: 
            <br>
            1. It must contain ONLY the following characters: lower case, upper case, numerics
            <br>
            2. Must be at least 8 characters in length and not greater than 32 characters
            `
          })
          break
        case 'repeat_password':
          res.status(400).send({
            error: 'Passwords do not match'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information',
            msg: error.details
          })
      }
    } else {
      next()
    }
  }
}
