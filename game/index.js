const Board = require('./classes/Board');
const Game = require('./classes/Game');
const BotPlayer = require('./classes/BotPlayer');
// const RealPlayer = require('./classes/RealPlayer');

/*
* To test with real user you need:
*   1 - Uncomment the RealPlayer above;
*   2 - Change the BotPlayer to RealPlayer on playerX or playerY below;
*/
const playerX = new BotPlayer();
const playerY = new BotPlayer();

const board = new Board();

const game = new Game({ board, playerX, playerY });

game.play();
