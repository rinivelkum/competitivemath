const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const User = require('../models/user')
const Solution = require('../models/solution')
const Problem = require('../models/problem')
const mongoose = require('mongoose')

// Begin POST methods

router.post('/problems', async (req, res) => {
  const problem = new Problem(req.body)

  try {
    await problem.save()
    res.status(201).send(problem)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.post('/problems/:id', auth, async (req, res) => {
  // Post solution for the problem ':id'
  const id = mongoose.Types.ObjectId(req.params.id)
  const solution = new Solution({
    solution: req.body.solution,
    owner: req.user._id,
    problem: id,
  })

  try {
    await solution.save()
    res.send(solution)
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router
