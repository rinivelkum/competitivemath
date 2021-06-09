const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
const userRouter = require('./routers/user')
const problemRouter = require('./routers/problem')

const app = express()
const port = process.env.PORT

app.use(express.json()) // Automatically parse JSON data into an object.
app.use(userRouter)
app.use(problemRouter)

app.listen(port, () => {
  console.log(`Server is up on ${port}`)
})
