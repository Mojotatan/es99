const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

let port = '3000'
const app = express()
app.listen(port, () => {console.log(`Listening on port ${port}...`)})

app
  .use(morgan('tiny'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))

  .use(express.static('public'))

  // put any other routes here

  .get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'))
  })