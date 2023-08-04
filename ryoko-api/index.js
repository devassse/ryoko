const express = require('express')
const app = express()
const dotenv = require("dotenv")

const database = require('./database')

dotenv.config()

port = process.env.API_PORT

app.get('/', (req, res) => {
  res.send('Hellooo World!')
})

app.listen(port, () => {
  console.log(`Ryoko API Running in Port: ${port}`)
})