const { default: Board } = require("../Board");

class Game{
  #board
  #playerX
  #playerY
  constructor({board, playerX, playerY}) {
    if(!board || !playerX || !playerY) {
      throw new Error('Unable to create Game because some parameter are missing');
    }
    this.#board = board;
    this.#playerX = playerX;
    this.#playerY = playerY;

  }

  async play() {
    console.log('Start your tic tac toe game');

    let isGameDone = false;

    while (!isGameDone) {
      let currentState = [];
      let checkResults = '';

      console.log('Current Board:');
      this.#board.render();

      currentState = this.#board.state

      console.log('Pick player X move:');
      const playerXMove = await this.#playerX.selectPosition(currentState);

      this.#board.setState = currentState.map((state, position) => position === playerXMove ? 1 : state);

      checkResults = this.#board.checkResults();
      if (checkResults === 'P1') {
        console.log('Player 1 wins!!!!');
        return;
      }

      if (checkResults === 'Tie') {
        this.#board.render();

        console.log('Game finished in a Tie');
        return;
      }

      console.log('Current Board:');
      this.#board.render();

      currentState = this.#board.state

      console.log('Pick player Y move:');
      const playerYMove = await this.#playerY.selectPosition(currentState);

      this.#board.setState = currentState.map((state, position) => position === playerYMove ? 2 : state);

      checkResults = this.#board.checkResults()

      if (checkResults === 'P2') {
        console.log('Player 2 wins!!!!');
        return;
      }

    }
  }
}

module.exports = Game;
