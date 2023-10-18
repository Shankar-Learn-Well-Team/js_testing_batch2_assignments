test('check mock function implementations', () => {
    jest.mock('./task5');
    const addition = require('./task5');

    // Changing the Implementation Behaviour using Jest Mock
    addition
        .mockImplementationOnce((value1, value2) => value1 - value2)
        .mockImplementation((value1, value2) => value1 * value2)
    console.log('After Adding Mock Implementation');
    console.log(addition(2, 3));
    console.log(addition(2, 3));
    console.log(addition(2, 3));
});
