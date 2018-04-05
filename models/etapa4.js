'use strict'

module.exports = () => {
  const db = require('../config/db')()
  const Schema = require('mongoose').Schema

  let Etapa4Schema = new Schema({
    negociacoes: {type: Array},
    id_etapa: {type: String, default: ''},
    checklist: {
      nome: {type: String, default: ''},
      status: {type: Boolean, default: false}
    }
  })
  return db.model('etapa4', Etapa4Schema)
}
