const Joi = require('@hapi/joi')

module.exports = {
  editPassword (req, res, next) {
    const schema = Joi.object({
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9!@#$%*]{8,32}$')),
      repeat_password: Joi.ref('password'),
      id: [
        Joi.string(),
        Joi.number()
      ]
    })
    const { error } = schema.validate(req.body)
    if (error) {
      switch (error.details[0].context.key) {
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
        case 'id':
          res.status(400).send({
            error: 'The id is incorrect'
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
  },
  editEmail (req, res, next) {
    const schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      id: [
        Joi.string(),
        Joi.number()
      ]
    })
    const { error } = schema.validate(req.body)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'id':
          res.status(400).send({
            error: 'The id is incorrect'
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
  },
  editUsername (req, res, next) {
    const schema = Joi.object({
      username: Joi.string().required().min(5).max(30).alphanum(),
      id: [
        Joi.string(),
        Joi.number()
      ]
    })
    const { error } = schema.validate(req.body)
    if (error) {
      switch (error.details[0].context.key) {
        case 'username':
          res.status(400).send({
            error: 'You must provide a valid username with at least 5 characters'
          })
          break
        case 'id':
          res.status(400).send({
            error: 'The id is incorrect'
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
  },
  editName (req, res, next) {
    const schema = Joi.object({
      name: Joi.string().required().min(3).max(30).alphanum(),
      id: [
        Joi.string(),
        Joi.number()
      ]
    })
    const { error } = schema.validate(req.body)
    if (error) {
      switch (error.details[0].context.key) {
        case 'name':
          res.status(400).send({
            error: 'You must provide a valid name with at least 3 characters'
          })
          break
        case 'id':
          res.status(400).send({
            error: 'The id is incorrect'
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
