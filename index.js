var express = require('express')
var app = express()

//var bodyParser = require('body-parser')
//app.use(bodyParser.urlencoded({ extended: true }))
//app.use(bodyParser.json())

var port = process.env.PORT || 8080

var router = express.Router()

router.get('/', function(req, res) {
  res.json({ message: 'Welcome to the api!' })
})

router.get('/safe', function(req, res) {
  res.json({ message: 'You got a success!' })
})

router.get('/risky', function(req, res) {
  if (Math.random() > 0.5) {
    res.json({ message: 'You got a success!' })
  }
  else {
    res.status(418).send('This is a teapot')
  }
})

app.use('/api', router)

app.listen(port)
console.log('listening on port ' + port)
