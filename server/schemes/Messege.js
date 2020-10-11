const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema = new Schema(
  {
    timezone: String,
    message: {
      type: String,
      required: true,
    },
    messageTo: {
      type: String, 
      required: true
    },
    messageFrom:{
      type: String,
      required: true
    }
  },
  { timestamps: true }
)
module.exports = mongoose.model('Message', messageSchema)
