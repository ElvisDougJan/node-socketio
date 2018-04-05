'use strict'

module.exports = () => {
  const db = require('../config/db')()
  const Schema = require('mongoose').Schema

  let NotificacaoSchema = new Schema({
    id_alvo: {type: String, default: ''},
    id_notificacao: {type: String, default: ''},
    id_destino: {type: String, default: ''},
    descricao: {type: String, default: ''},
    visualizada: {type: Boolean, default: false}
  })
  return db.model('notificacao', NotificacaoSchema)
}
