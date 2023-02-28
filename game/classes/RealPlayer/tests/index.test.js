import { jest } from '@jest/globals';
import RealPlayer from '..';
import inquirer from 'inquirer';


jest.mock('inquirer');

describe('RealPlayer Class', () => {
  test('should have Player properties', () => {
    const realPlayer = new RealPlayer();
    expect(realPlayer).toHaveProperty('name');
    expect(realPlayer).toHaveProperty('setName');
    expect(realPlayer).toHaveProperty('selectPosition');
  });
  describe('Static movement Method', () => {
    test('should show all options whe state list is not provided', () => {
      const inquirerMock = jest.spyOn(inquirer, 'prompt');
      RealPlayer.movement();
      expect(inquirerMock).toHaveBeenCalledWith(expect.objectContaining({
        type: 'list',
        choices: expect.arrayContaining([
          expect.objectContaining({ value: 0 }),
          expect.objectContaining({ value: 1 }),
          expect.objectContaining({ value: 2 }),
          expect.objectContaining({ value: 3 }),
          expect.objectContaining({ value: 4 }),
          expect.objectContaining({ value: 5 }),
          expect.objectContaining({ value: 6 }),
          expect.objectContaining({ value: 7 }),
          expect.objectContaining({ value: 8 })
        ])
      }));
    });
    test('should show available positions based on state', () => {
      const inquirerMock = jest.spyOn(inquirer, 'prompt');
      RealPlayer.movement([null, 1, 2, 2, 1, null, null, null, 1]);
      expect(inquirerMock).toHaveBeenCalledWith(expect.objectContaining({
        type: 'list',
        choices: expect.arrayContaining([
          expect.objectContaining({ value: 1 }),
          expect.objectContaining({ value: 5 }),
          expect.objectContaining({ value: 6 }),
          expect.objectContaining({ value: 7 }),
        ])
      }));
    });
    test('should inform no options when no null state available', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      RealPlayer.movement([1, 1, 2, 2, 1, 2, 1, 2, 1]);
      expect(consoleSpy).toHaveBeenCalledWith('There is no option available');
    });

    test('should return inquire value', () => {
      const inquirerMock = jest.spyOn(inquirer, 'prompt').mockReturnValue({playerMove: 0});
      expect(RealPlayer.movement([null, 1, 2, 2, 1, null, null, null, 1])).resolves.toBe(0);
    });
  });
});
