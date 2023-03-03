
const Board = require("./classes/Board");
const Game = require("./classes/Game");
const RealPlayer = require("./classes/RealPlayer");

const playerX = new RealPlayer();
const playerY = new RealPlayer();

const board = new Board();

const game = new Game({board, playerX, playerY});

game.play();

