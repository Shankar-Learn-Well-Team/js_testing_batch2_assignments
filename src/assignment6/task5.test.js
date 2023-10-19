test('check mock function implementations', () => {
    jest.mock('./odd');
    const addition = require('./odd');

    // Changing the Implementation Behaviour using Jest Mock
    addition

        .mockImplementationOnce((value1) => {
            if (value1 > 0) {
                if (value1 % 2 == 0) {
                    return true;
                }

                // if the number is odd
                else {
                    return false;
                }
            } else {
                return false;
            }
        })

        .mockImplementation((value1, value2) => value1 * value2) //skip
        .mockImplementation((value1, value2) => value1 / value2); //execute
    console.log('After Adding Mock Implementation');
    console.log(addition(20));
    console.log(addition(60, 30));
    console.log(addition(60, 30));
});
