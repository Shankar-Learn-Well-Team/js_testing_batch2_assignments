const isFibonacciNumber  = require('./assignment3.js');

describe('isFibonacciNumber', () => {
  it('return true for a Fibonacci number (21)', () => {
    expect(isFibonacciNumber(21)).toBe(true);
  });

  it('return false for a non-Fibonacci number (7)', () => {
    expect(isFibonacciNumber(7)).toBe(false);
  });
});