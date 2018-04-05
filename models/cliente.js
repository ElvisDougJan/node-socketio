'use strict'

module.exports = () => {
  const db = require('../config/db')()
  const Schema = require('mongoose').Schema

  let ClienteSchema = new Schema({
    nome: {type: String, default: ''},
    cnpj: {type: String, default: ''},
    cpf: {type: String, default: ''},
    contatos: {type: String, default: ''},
    endereco: {type: String, default: ''},
    dadosDeConsumo: {
      cidade: {type: String, default: ''},
      UF: {type: String, default: ''},
      custoKwh: {type: Number, default: 0.00},
      porcentagemNA: {type: Number, default: 0.00},
      historicoDeConsumo: {type: Array},
      gerarOrcamento: {type: Boolean, default: false}
    }
  })
  return db.model('cliente', ClienteSchema)
}
