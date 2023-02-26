const Player = require('..');

describe('Player Class', () => {
  describe('Name property', () => {
    test('should set a name on constructor', () => {
      const player = new Player('name');
      expect(player.name).toEqual('name');
    });
    test('should update the name on set name', () => {
      const player = new Player('old name');
      player.name = 'new name';
      expect(player.name).toEqual('new name');
    });
    test('should set the name on set name', () => {
      const player = new Player();
      player.name = 'new name';
      expect(player.name).toEqual('new name');
    });
    test('should throw error when name is not a string on constructor', () => {
      const player = new Player(2);
      expect(player.name).toEqual('new name');
    });
    test('should throw error when name is not a string on set name', () => {
      const player = new Player(2);
      player.name = 2;
      expect(player.name).toEqual('new name');
    });
  });
});