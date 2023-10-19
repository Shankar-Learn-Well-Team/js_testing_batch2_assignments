const forEach = require('../mock/forEach');
const mockIsEven = jest.fn((number) => {
    if (number > 0) {
        if (number % 2 == 0) {
            return true;
        }

        // if the number is odd
        else {
            return false;
        }
    } else {
        return false;
    }
});

test('test is even mock function', () => {
    forEach([22, 24, 0], mockIsEven);

    // The mock function was called thrice
    //expect(mockIsEven.mock.calls).toHaveLength(3);
     expect(mockIsEven.mock.results[0].value).toBe(false);
     //expect(mockIsEven.mock.results[1][0].value).toBe(true);
    // expect(mockIsEven.mock.calls[0][0]).toBe(22);
   // expect(mockIsEven.mock.calls[0][0]).toBe(true);
});
