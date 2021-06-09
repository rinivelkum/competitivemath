const mongoose = require('mongoose')

const problemSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  difficulty: {
    type: String,
    required: true,
    trim: true,
  },
})

const Problem = mongoose.model('Problem', problemSchema)

module.exports = Problem
