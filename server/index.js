'use strict'

const express  = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

/**
 * Expres configuration
 */

 app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())
 app.use(express.static(path.join(__dirname, 'public')))

/**
 * Api routes
 */

// Muestra todos los speakers
app.get('/api/speakers', (req, res) => {
  res.sendFile(path.join(__dirname, 'db', 'speakers.json'))
})

//muestra info de un speaker
app.get('/api/speakers/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'db', `${req.params.id}.json`))
})

// index.html como SPA
app.get('*', (req, res, next) => {
  if(req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  } else {
    next()
  }
})

/**
 *  Inicia el server
 */

app.listen(3000, () => console.log('Server running on http://localhost:3000'))
