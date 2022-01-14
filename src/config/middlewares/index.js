const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

module.exports = app => {
  app.use(cors())
  app.use(morgan('dev'))
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())
}
