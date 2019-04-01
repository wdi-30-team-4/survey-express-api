const mongoose = require('mongoose')

const surveySchema = new mongoose.Schema({
  // Title of the Survey
  title: {
    type: String,
    required: true,
    unique: true
  },
  // Question being asked
  question: {
    type: String,
    required: true
  },
  // The available survey responses (ex. ["Yes", "No"])
  options: {
    type: Array,
    required: true
  },
  // Array of responses to the survey
  response: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Response'
  }],
  // The survey creator
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Survey', surveySchema)
