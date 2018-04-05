module.exports = (io) => {
  io.on('connecton', socket => {
    console.log('conectado com o front')
  })
}
