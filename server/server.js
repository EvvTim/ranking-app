const express = require('express');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const players = require('../src/data/players');
const addPoints = require('./addPoints');
const randomPoints = require('./randomPoints');

app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.json([...players].sort((a, b) => b.points - a.points));
  res.end();
});

setInterval(() => {
  io.emit('newData', addPoints(players, randomPoints(0, 9)));
}, 1000);

server.listen(9999, (err) => {
  if (err) {
    throw Error(err);
  } else {
    console.log('http://localhost:9999/');
  }
});
