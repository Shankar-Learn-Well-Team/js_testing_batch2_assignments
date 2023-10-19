const forEach = require('../mock/forEach');

const mockIsEven = jest.fn((n) => {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
});

test('forEach mock is Even', () => {
    forEach([8, 7, 10], mockIsEven);

    expect(mockIsEven.mock.results[0].value).toBe(true);

    expect(mockIsEven.mock.results[1].value).toBe(false);

    expect(mockIsEven.mock.results[2].value).toBe(true);
});
