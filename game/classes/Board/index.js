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

  render() {
    const formmatedState = this.states.map((state) => {
      switch (state) {
        case 1:
          return ' X ';
        case 2:
          return ' O ';
        default:
          return '   ';
      }
    });
    const drawLine = '-----------';
    console.log(`
${formmatedState[0]}|${formmatedState[1]}|${formmatedState[2]}\n
${drawLine}\n
${formmatedState[3]}|${formmatedState[4]}|${formmatedState[5]}\n
${drawLine}\n
${formmatedState[6]}|${formmatedState[7]}|${formmatedState[8]}\n
`);
  }

  checkResults() {
    return false;
  }
}

module.exports = Board;
