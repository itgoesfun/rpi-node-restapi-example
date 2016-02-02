// server.js
// Setup the packages that we need
var express    	= require('express');        // call express
var app        	= express();                 // define our app using express
var http	   	= require('http');
var faker		= require('faker');

var port = 8080;        // set our port
var router = express.Router();

router.get('/animals', function(req, res) {
	var jsonData = []
	for(var i=0; i<20; i++){
		var animal = {
			name: faker.name.findName(),
			image: faker.image.animals(),
			phrase: faker.hacker.phrase()
		}
		jsonData.push(animal);
	}
	result = {
		meta: {total: 20},
		animals: jsonData
	}
	res.json(result);
	res.status(200);
})

router.get('/', function(req, res) {
	res.send('The test server is up and running. Use /api/v1/ to query the api.');
});

app.use('/api/v1', router);

//Start the server
app.listen(port);
console.log('Magic happens on port ' + port);
