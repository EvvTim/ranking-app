const express = require('express');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const players = require('../src/data/players');
const addPoints = require('./addPoints');

app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.json([...players].sort((a, b) => b.points - a.points));
  res.end();
});

io.on('connection', (socket) => {
  console.log('connected', socket.id);
});

io.on('connection', (socket) => {
  socket.emit('score', players);
});

setInterval(() => {
  io.emit('newData', addPoints(players, 1));
}, 1000);

server.listen(9999, (err) => {
  if (err) {
    throw Error(err);
  } else {
    console.log('http://localhost:9999/');
  }
});
