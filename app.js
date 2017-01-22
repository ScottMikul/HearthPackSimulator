var express = require('express')
var bodyParser = require('body-parser');
var app = express()
var cards = require('./cards.json');

app.use(bodyParser.json());
app.use(express.static('.'))

app.get('/cardlist', function(req, res){
	res.send(cards);
});

app.listen("3000");