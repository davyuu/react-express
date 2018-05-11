const express = require('express');
const apicache = require('apicache');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
const cache = apicache.middleware
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/post', cache('5 minutes'), (req, res) => {
	console.log('/api/post')
	request({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    json: true,
    body: req.body
	}, function (error, response, body){
		console.log('/api/post return')
  	res.json(JSON.stringify(body));
	});
});

app.post('/api/test', (req, res) => {
	console.log('/api/test')
	setTimeout(() => {
		console.log('/api/test return')
	  res.json({ id: 1, name: "John"})
	}, 3000)
})

app.listen(port, () => console.log(`Listening on port ${port}`));