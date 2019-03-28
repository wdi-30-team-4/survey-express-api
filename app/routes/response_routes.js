const express = require('express')
const passport = require('passport')
const Response = require('../models/response')
const Survey = require('../models/survey')
// const customErrors = require('../../lib/custom_errors')
// const handle404 = customErrors.handle404
// const requireOwnership = customErrors.requireOwnership
// const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

// INDEX
// GET /surveys
router.get('/responses', requireToken, (req, res, next) => {
  Response.find()
    .then(responses => {
      return responses.map(response => response.toObject())
    })
    .then(responses => res.status(200).json({ responses: responses }))
    .catch(next)
})
//
// // SHOW
// // GET /surveys/5a7db6c74d55bc51bdf39793
// router.get('/surveys/:id', requireToken, (req, res, next) => {
//   Survey.findById(req.params.id)
//     .then(handle404)
//     .then(survey => res.status(200).json({ survey: survey.toObject() }))
//     .catch(next)
// })

// CREATE
// POST /surveys
router.post('/responses', requireToken, (req, res, next) => {
  req.body.response.owner = req.user.id
  let resId = null
  Response.create(req.body.response)
    .then(response => {
      resId = response.id
      return Survey.findById(req.body.response.question)
    })
    // .then(console.log)
    .then(survey => {
      return survey.update({$push: {response: resId}})
    })
    //   res.status(201).json({ response: response.toObject() })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// .catch(console.log)
// })

// UPDATE
// PATCH /surveys/5a7db6c74d55bc51bdf39793
// router.patch('/surveys/:id', requireToken, removeBlanks, (req, res, next) => {
//   delete req.body.survey.owner
//
//   Survey.findById(req.params.id)
//     .then(handle404)
//     .then(survey => {
//       requireOwnership(req, survey)
//       return survey.update(req.body.survey)
//     })
//     .then(() => res.sendStatus(204))
//     .catch(next)
// })

// DESTROY
// DELETE /surveys/5a7db6c74d55bc51bdf39793
// router.delete('/surveys/:id', requireToken, (req, res, next) => {
//   Survey.findById(req.params.id)
//     .then(handle404)
//     .then(survey => {
//       requireOwnership(req, survey)
//       survey.remove()
//     })
//     .then(() => res.sendStatus(204))
//     .catch(next)
// })

module.exports = router
