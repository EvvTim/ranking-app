const players = require('../data/players');

const playersData = [...players];

const setRandomIndex = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const chooseRandomPlayer = (data) => {
  const randomIndex = setRandomIndex(0, data.length - 1);
  const player = data[randomIndex];

  return player.id;
};

const addPoints = (data, points) => {
  const playerId = chooseRandomPlayer(data);
  const player = data.find((player) => player.id === playerId);
  player.points += points;
  return data.splice(data.indexOf(player - 1), 1, player);
};

setInterval(() => {
  addPoints(playersData, 1);
}, 1000);
