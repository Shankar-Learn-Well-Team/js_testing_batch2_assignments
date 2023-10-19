test('check mock function implementations', () => {
    jest.mock('./task3');
    const addition = require('./task3');

    // Changing the Implementation Behaviour using Jest Mock
    addition
        .mockImplementationOnce((value1, value2) => value1 - value2)
        .mockImplementation((value1, value2) => value1 * value2);
    console.log('After Adding Mock Implementation');
    console.log(addition(5, 7));
    console.log(addition(5, 7));
    console.log(addition(5, 7));
});
