class Board {
  constructor() {
    this.states = [null, null, null, null, null, null, null, null, null];
  }

  set setState(state) {
    if (!Array.isArray(state)) {
      throw new Error('The state must be a list.');
    }
    if (state.length !== 9) {
      throw new Error('State must have size equals 9.');
    }
    if (!state.every((current) => current === null || current === 1 || current === 2)) {
      throw new Error('The state only accept the values null, 1 and 2');
    }

    this.states = state;
  }

  get state() {
    return this.states;
  }
}

module.exports = Board;
