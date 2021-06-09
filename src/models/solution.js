const mongoose = require('mongoose')

const solutionSchema = new mongoose.Schema({
  solution: {
    type: String,
    required: true,
    trim: true,
  },
  problem: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
})

const Solution = mongoose.model('Solution', solutionSchema)

module.exports = Solution
