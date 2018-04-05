const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const index = require('./routes/index')
const app = express()
const io = require('socket.io')()
app.io = io

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(cors())
app.use('/', index)

module.exports = app
