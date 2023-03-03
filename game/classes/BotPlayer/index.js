const Player = require('../Player');

class BotPlayer extends Player {
  constructor(...params) {
    super(...params);
    this.setSelectPosition = BotPlayer.movement;
  }

  static movement(states = []) {
    if (states.length && !states.some(state => state === null)) {
      console.log('There is no option available');
      return;
    }

    if (!states.length || states.every(state => state === null)) {
      return BotPlayer.#getRandomPosition(9);
    }

    const availablePositions = states.map((state, index) => state === null ? index : undefined).filter(state => state);

    const selectedPosition = BotPlayer.#getRandomPosition(availablePositions.length);

    return availablePositions[selectedPosition];
  }

  static #getRandomPosition(size) {
    return Math.floor(Math.random() * size);
  }
}

module.exports = BotPlayer;
