test('check mock function implementations', () => {
    jest.mock('./addition');
    const addition = require('./addition');

    // Changing the Implementation Behaviour using Jest Mock
    addition
        .mockImplementationOnce((value1, value2) => value1 - value2)
        .mockImplementation((value1, value2) => value1 * value2);
    console.log('After Adding Mock Implementation');
    console.log(addition(10, 20));
    console.log(addition(10, 20));
    console.log(addition(10, 20));
});
