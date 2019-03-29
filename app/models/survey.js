const mongoose = require('mongoose')

const surveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  question: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  },
  response: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Response'
  }],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Survey', surveySchema)
