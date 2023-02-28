import RealPlayer from '..';

describe('RealPlayer Class', () => {
  test('should have Player properties', () => {
    const realPlayer = new RealPlayer();
    expect(realPlayer).toHaveProperty('name');
    expect(realPlayer).toHaveProperty('setName');
    expect(realPlayer).toHaveProperty('selectPosition');
  });
});
