var express = require('express')
var app = express()

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
