'use strict'

module.exports = () => {
  const db = require('../config/db')()
  const Schema = require('mongoose').Schema

  let UsuarioSchema = new Schema({
    id_cargo: {type: Schema.Types.ObjectId, ref: 'cargo'},
    id_usuario: {type: String, default: ''},
    nome: {type: String, default: ''},
    cpf: {type: String, default: ''},
    telefone: {type: String, default: ''},
    endereco: {type: String, default: ''},
    email: {type: String, default: ''},
    superior: {type: String, default: ''},
    username: {type: String, default: ''},
    password: {type: String, default: ''}
  })
  return db.model('usuario', UsuarioSchema)
}
