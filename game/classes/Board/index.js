class Board {
  construtor() {
    this.state = [null, null, null, null, null, null, null, null, null];
  }

  set setState(state) {
    console.log(state);
  }
}

module.exports = Board;
