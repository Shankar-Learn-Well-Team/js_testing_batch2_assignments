const forEach = require('../mock/forEach');

const isPerfectNumber = jest.fn((num) => {
    let sum = 0;
    for (var i = 0; i < num; i++) {
        if (num % i == 0) {
            sum = sum + i;
        }
    }
    if (sum == num) { return true; }
    return false;

});

test('forEach Perfect Number function', () => {
    forEach([6, 12, 28], isPerfectNumber);


    expect(isPerfectNumber.mock.results[0].value).toBe(true);
    expect(isPerfectNumber.mock.results[1].value).toBe(false);
    expect(isPerfectNumber.mock.results[2].value).toBe(true);


});