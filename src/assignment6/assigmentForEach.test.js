//const forEach = require('./forEach');


function isPerfectNumber(num) {
    let sum = 0;
    for (var i = 0; i < num; i++) {
        if (num % i == 0) {
            sum = sum + i;
        }
    }
    if (sum == num) { return true; }
    return false;

}

test('forEach Perfect Number function', () => {
    // forEach(isPerfectNumber);


    expect(isPerfectNumber(6)).toBe(true);

    expect(isPerfectNumber(28)).toBe(true);

    expect(isPerfectNumber(12)).toBe(false);


});