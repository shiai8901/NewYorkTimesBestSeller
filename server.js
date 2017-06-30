const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const https = require('https');
const request = require('request');

const port = process.env.PORT || 8080;
const api_url = "https://api.nytimes.com/svc/books/v3/lists/";
process.env.api_key = "6b63ef908c9045a9ac3def3734d36e69";


app.use(express.static(__dirname + '/client'));

router.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next();
})

// API Routes
router.get('/', (req, res) => {

	request.get({
		url: api_url + "overview.json",
		qs: {
			'api-key': process.env.api_key,
		},
	}, function(err, response, body) {
		res.send(body);
	});
});

router.get('/:date', (req, res) => {
	let date = req.params.date;

	request.get({
		url: api_url + "overview.json",
		qs: {
			'api-key': process.env.api_key,
			'published-date': date
		},
	}, function(err, response, body) {
		res.send(body);
	});
});

router.get('/list/:list_name', (req, res) => {
	let list_name = req.params.list_name;

	request.get({
		url: api_url + list_name + ".json",
		qs: {
			'api-key': process.env.api_key,
		},
	}, function(err, response, body) {
		res.send(body);
	});
});

router.get('/list/:list_name/:date', (req, res) => {
	let list_name = req.params.list_name;
	let date = req.params.date;

	request.get({
		url: api_url + date + "/" + list_name + ".json",
		qs: {
			'api-key': process.env.api_key,
			'published-date': date,
			'sort-order': "ASC"
		},
	}, function(err, response, body) {
		res.send(body);
	});
});

app.use('/api', router);
app.listen(port);
console.log(`API running at localhost:${port}/api`);