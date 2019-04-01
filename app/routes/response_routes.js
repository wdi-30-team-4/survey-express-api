const express = require('express')
const passport = require('passport')
const Response = require('../models/response')
const Survey = require('../models/survey')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

// INDEX
// GET /responses
router.get('/responses', requireToken, (req, res, next) => {
  Response.find()
    .then(responses => {
      return responses.map(response => response.toObject())
    })
    .then(responses => res.status(200).json({ responses: responses }))
    .catch(next)
})

// CREATE
// POST /responses
router.post('/responses', requireToken, (req, res, next) => {
  req.body.response.owner = req.user.id
  // let resId = null
  // Response.findOne({ owner: req.user.id }, {question: req.body.response.question})
  //   .then((data) => {
  //     if (data === null) {
  //       Response.create(req.body.response)
  //         .then(response => {
  //           // set responseId for later use
  //           resId = response.id
  //           // return the Survey thats being responded to
  //           return Survey.findById(req.body.response.question)
  //         })
  //         .then(survey => {
  //           // push the current response to the survey
  //           return survey.update({$push: {response: resId}})
  //         })
  //         .then(() => res.sendStatus(204))
  //     } else {
  //       res.status(500).json({ message: 'Some Error!' })
  //     }
  //   })
  // .catch(next)
  // })
  let resId = null
  Response.create(req.body.response)
    .then(response => {
    // set responseId for later use
      resId = response.id
      // return the Survey thats being responded to
      return Survey.findById(req.body.response.question)
    })
    .then(survey => {
    // push the current response to the survey
      return survey.update({$push: {response: resId}})
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
