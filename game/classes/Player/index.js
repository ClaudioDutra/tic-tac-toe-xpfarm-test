class Player {
  constructor(name = '', selectPosition = () => { }) {
    this.setName = name;
    this.setSelectPosition = selectPosition;
  }

  set setName(name) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string.');
    }
    this.name = name;
  }

  set setSelectPosition(func) {
    this.selectPosition = (...params) => {
      const position = func(...params);
      if (position < 0 || position > 8) {
        throw new Error('The position must be between 0 and 8');
      }

      return position;
    };
  }
}

module.exports = Player;
