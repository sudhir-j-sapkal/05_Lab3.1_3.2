'use strict'
const express = require('express')
const createError = require('http-errors')
const dataRoutes = require('./routes')
const hello = require('./routes/hello')

const app = express()
app.use(express.json())

app.get('/', dataRoutes)

app.post('/getdata', hello);

app.use((req, res, next) => {
    console.log('req method: ', req.method);
    if (req.method == 'PUT') {
        next(createError(405))
        return
    }
  next(createError(404))
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message)
})

module.exports = app