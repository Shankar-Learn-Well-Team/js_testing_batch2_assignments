// assignment 6 
// Task 1 - forEach.test.js
const forEach = require('../forEach');

const mockIsNegative = jest.fn(number => {
    if (number < 0) {
        return true;
    } else {
        return false;
    }
});

test('test is negative mock function', () => {
    forEach([-12, 34, 0], mockIsNegative);

    // The mock function was called twice
    expect(mockIsNegative.mock.calls).toHaveLength(3);

    // The first argument of the first call to the function was 0
    expect(mockIsNegative.mock.calls[0][0]).toBe(-12);

    // The first argument of the second call to the function was 1
    expect(mockIsNegative.mock.calls[1][0]).toBe(34);

    // The first argument of the third call to the function was 2
    expect(mockIsNegative.mock.calls[2][0]).toBe(0);

    // The return value of the first call to the function was true
    expect(mockIsNegative.mock.results[0].value).toBe(true);

    // The return value of the second call to the function was false
    expect(mockIsNegative.mock.results[1].value).toBe(false);

    // The return value of the third call to the function was false
    expect(mockIsNegative.mock.results[2].value).toBe(false);
});