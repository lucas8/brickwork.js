var express = require('express')
var app = express()
var path = require('path')

app.use(express.static('public'))

// viewed at http://localhost:8080
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

// This would be loaded from the server
app.get('/js/overlay.js', function (req, res) {
  res.sendFile(path.join(__dirname + '/../lib/build/index.js'))
})

app.listen(8080)
console.log('Server running on http://localhost:8080')
