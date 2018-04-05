const express = require('express')
const router = express.Router()
const cargo = require('./../models/cargo')()
// const usuario = require('./../models/usuario')()

module.exports = (application) => {
  application.get('/', (req, res) => {
    application.controllers.usuarioController.mandaMsg(application, req, res)
  })
}

// /* GET users listing. */
// router.get('/:_id', (req, res) => {
//   usuario.findById(req.params._id, (err, usuarioEncontrado) => {
//     (err) ? console.log(err) : res.send(usuarioEncontrado)
//   })
// })

router.post('/', (req, res) => {
  cargo.create(req.body, (err, cargoCriado) => {
    (err) ? console.log(err) : res.send(cargoCriado)
  })
})

// router.post('/1/', (req, res) => {
//   //usuario.create(req.body, (err, usuarioCriado) => {
//     (err) ? console.log(err) : res.send(usuarioCriado)
//   })//
// })

module.exports = router
