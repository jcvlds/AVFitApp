const { Model } = require('objection')
const knex = require('../knex')

Model.knex(knex)

class User extends Model {
  static get tableName () {
    return 'users'
  }

  // static get relationMappings() {
  //   const Message = require('./Message')
  //   return {
  //     messages: {
  //       relation: Model.HasManyRelation,
  //       modelClass: Message,
  //       join: {
  //         from: 'users.id',
  //         to: 'messages.user_id'
  //       }
  //     }
  //   }
  // }

  // on Messages Model file
  // static get relationMappings() {
  //   const User = require('./User')
  //   return {
  //       writer: {
  //           relation: Model.BelongsToOneRelation,
  //           modelClass: User,
  //           join: {
  //               from: 'messages.user_id',
  //               to: 'users.id'
  //           }
  //       }
  //   }
}

module.exports = User
