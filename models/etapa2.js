'use strict'

module.exports = () => {
  const db = require('../config/db')()
  const Schema = require('mongoose').Schema

  let Etapa2Schema = new Schema({
    negociacoes: {type: Array},
    id_etapa: {type: String, default: ''},
    checklist: {
      nome: {type: String, default: ''},
      status: {type: Boolean, default: false}
    }
  })
  return db.model('etapa2', Etapa2Schema)
}
