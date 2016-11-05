const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.post('/', function (req, res) {
  res.send('POST Hello World!')
})

app.get('/', function (req, res) {
  res.send('GET Hello World!')
})

app.post("/mail/process", function(req,res){
  res.send("POST mail process")
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
