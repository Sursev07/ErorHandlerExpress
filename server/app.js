require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const routes = require('./routes')
const errorHandler = require("./middleware/errorHandler")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

module.exports = app