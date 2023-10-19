const forEach = require('../../forEach');
const mockIsLeapYr = jest.fn((year) => {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        console.log('It is Leap Year -', year);
        return true;
    } else {
        console.log('It is not Leap Year');
        return false;
    }
});

test('forEach mock function', () => {
    forEach([2022, 2024, 2020], mockIsLeapYr);

expect(mockIsLeapYr.mock.results[0].value).toBe(false);

expect(mockIsLeapYr.mock.results[1].value).toBe(true);

expect(mockIsLeapYr.mock.results[2].value).toBe(true);
});
