// prime.test.js
const isPrime = require('./prime');

test('checks if 3 is prime', () => {
    expect(isPrime(3)).toBe(true);
});

test('checks if 4 is not prime', () => {
    expect(isPrime(4)).toBe(false);
});

// Mocking the isPrime function
jest.mock('./prime');

// Writing a test case using the mocked function
test('mocks the isPrime function', () => {
    const isPrime = require('./prime');
    isPrime.mockReturnValue(false);

    expect(isPrime(7)).toBe(false);
});
