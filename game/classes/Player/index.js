class Player {
  constructor(name = '') {
    this.setName = name;
  }

  set setName(name) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string.');
    }
    this.name = name;
  }

  set makeMove(value) {

  }
}

module.exports = Player;
