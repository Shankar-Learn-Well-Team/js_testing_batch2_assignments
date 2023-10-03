const isSquareNumber = require('./assignment4.js');

describe('isSquareNumber', () => {
  it('return true for a square number (64)', () => {
    expect(isSquareNumber(64)).toBe(true);
  });

  it('return false for a non-square number (8)', () => {
    expect(isSquareNumber(8)).toBe(false);
  });
});