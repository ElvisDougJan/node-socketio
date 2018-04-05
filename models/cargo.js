'use strict'

module.exports = () => {
  const db = require('../config/db')()
  const Schema = require('mongoose').Schema

  let CargoSchema = new Schema({
    nome: {type: String, default: ''},
    modificadoEm: {type: String, default: ''}
  })
  return db.model('cargo', CargoSchema)
}
