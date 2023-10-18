// assignment 6 
// Task 1 - mock_assert.test.js

const createArray = jest.fn();

test('calling an array', () => {
    createArray(['Apple', 'Banana', 'Orange']);
    expect(createArray).toHaveBeenCalledWith(['Apple', 'Banana', 'Orange']);
    expect(createArray).toHaveBeenCalledTimes(1);
})

test('calling an array second time', () => {
    createArray([12, 45, 67]);
    createArray([true, false]);

    expect(createArray).toHaveBeenCalledWith([12, 45, 67]);
    expect(createArray).toHaveBeenCalledWith([true, false]);
    expect(createArray).toHaveBeenCalledTimes(3);
});
