
const Player = require('..');

describe('Player Class', () => {
  describe('Name property', () => {
    test('should set a name on constructor', () => {
      const player = new Player('name');
      expect(player.name).toEqual('name');
    });
    test('should update the name on set name', () => {
      const player = new Player('old name');
      player.setName = 'new name';
      expect(player.name).toEqual('new name');
    });
    test('should set the name on set name', () => {
      const player = new Player();
      player.setName = 'new name';
      expect(player.name).toEqual('new name');
    });
    test('should throw error when name is not a string on constructor', () => {
      expect(() => { new Player(2); }).toThrowError();
    });
    test('should throw error when name is not a string on set name', () => {
      const player = new Player();

      expect(() => { player.setName = 2; }).toThrowError();
    });
  });
  describe('setSelectPosition Method', () => {
    test('should set function to the selectPosition method', () => {
      const player = new Player();
      const fakeFunction = jest.fn();
      player.setSelectPosition = fakeFunction;
      player.selectPosition();
      expect(fakeFunction).toHaveBeenCalledTimes(1);
    });
    test('should selectPosition method return a position between 0 and 8', () => {
      const player = new Player();
      const mockValue = Math.random() % 8;
      const fakeFunction = jest.fn().mockReturnValue(mockValue);
      player.setSelectPosition = fakeFunction;
      const value = player.selectPosition();
      expect(fakeFunction).toHaveBeenCalledTimes(1);
      expect(value).toBe(mockValue);
    });
    test('should throw error when return value is not between 0 and 8', () => {
      const player = new Player();
      const mockValue = (Math.random() % 8) + 10;
      const fakeFunction = jest.fn().mockReturnValue(mockValue);
      player.setSelectPosition = fakeFunction;
      expect(() => player.selectPosition()).toThrowError();
    });
  });
});
