const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  // Answer the responder selected
  answer: {
    type: String,
    required: true
  },
  // ID of the survey being responded to
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Survey',
    required: true
  },
  // The ID of the responder
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Response', responseSchema)
