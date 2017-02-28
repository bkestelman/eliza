var express = require('express')
var app = express() 
var eliza = require('./eliza.js')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

app.get('/', function(req, res) {
	console.log(req.query)
	console.log(req.query.human)
	var response = eliza.response(req.query.human)
	console.log(response)
	res.send(response)
})

app.post('/', function(req, res) {
	console.log(req.body)
	console.log(req.body.human)
	var response = eliza.response(req.body.human)
	console.log(response)
	res.send(response)
})

app.listen(8080, function() {
	console.log('Running')
})
