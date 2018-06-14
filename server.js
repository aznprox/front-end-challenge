// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   var payload = fs.readFileSync('./data_set.json', 'utf8');
//   res.end(payload);
// }).listen(1337);

// console.log('Server started...');

const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 1337;

var payload = fs.readFileSync('./data_set.json', 'utf8');

app.get('/api/data', (req, res) => {
  res.send(payload);
});

app.listen(port, () => console.log(`Listening on port ${port}`));