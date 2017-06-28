const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const https = require('https');

const port = process.env.PORT || 8080;
const api_key = "6b63ef908c9045a9ac3def3734d36e69";

const options_config = {
	hostname: "api.nytimes.com",
	path: '/svc/books/v3/lists/',
	method: 'GET'
}

const getDataFromAPI = function(options) {
	let data = "";
	const promise = new Promise((resolve, reject) => {
	const req = https.request(options, (res) => {
			res.on('data', (d) => {
				data += d;
			});
			res.on('end', () => {
				resolve(data);		
			});
		});
		req.on('error', (e) => {
			console.error(e);
		});
		req.end();

	})
	return Promise.resolve(promise);
}

router.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next();
})

// API Routes
router.get('/', (req, res) => {
	console.log('server get /');
	let options = Object.assign({}, options_config);
	let params = 'overview.json?api-key=' + api_key;
	options.path += params;

	Promise.resolve(getDataFromAPI(options))
		.then((data) => {
			res.send(data);
		})
});

router.get('/date/:date', (req, res) => {
	let options = Object.assign({}, options_config);
	let date = req.params.date;
	let params = 'overview.json?api-key=' + api_key + '&published_date=' + date;
	options.path += params;

	Promise.resolve(getDataFromAPI(options))
		.then((data) => {
			res.send(data);
		})
});

router.get('/list/:list_name', (req, res) => {
	let options = Object.assign({}, options_config);
	let list_name = req.params.list_name;
	let params = '.json?api-key=' + api_key + '&list=' + list_name;
	options.path += params;

	Promise.resolve(getDataFromAPI(options))
		.then((data) => {
			res.send(data);
		})
});

app.use('/api', router);
app.listen(port);
console.log(`API running at localhost:${port}/api`);