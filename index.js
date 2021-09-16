const express = require('express')
const server = express()

server.use(express.json())

server.get('/', (_, res) => {
  res.json({ status: 'ok' })
})

module.exports = server
