module.exports.mandaMsg = (application, req, res) => {
  application.get('io').emit('msgParaCliente', 'Mensagem enviada pelo NodeJs')
}
