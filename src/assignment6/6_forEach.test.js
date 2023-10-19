const forEach = require('../mock/forEach');

const reverseString=jest.fn((str)=> {
    let rev = '';
    for (var i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev === str) {
        return true;
    } else {
        return false;
    }
})

test('forEach mock function', () => {
    forEach(["level", "madam","world"], reverseString);

    // The mock function was called twice
    //expect(reverseString.mock.calls).toHaveLength(2);

    // The first argument of the first call to the function was 0
    //expect(reverseString.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    //expect(reverseString.mock.calls[1][0]).toBe(1);

    expect(reverseString.mock.results[0].value).toBe(true);

   expect(reverseString.mock.results[1].value).toBe(true);

    expect(reverseString.mock.results[2].value).toBe(false);
});

