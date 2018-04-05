let mongoose = require('mongoose')
let db

module.exports = () => {
  if (!db) {
    db = mongoose.connect('mongodb://CDOP:cd0p4tu4l@ds113608.mlab.com:13608/cdop')
  }
  return mongoose.connection
}
