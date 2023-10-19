test('check mock function implementations', () => {
    jest.mock('./reverse.js');
    const reversestr = require('./reverse');

    // Changing the Implementation Behaviour using Jest Mock
    reversestr
        .mockImplementationOnce((str) => str)
        .mockImplementationOnce((str) => str)
        .mockImplementationOnce((str) => str);
    console.log('After Adding Mock Implementation');
    console.log(reversestr("level"));
    console.log(reversestr('level'));
    console.log(reversestr("level"));
      console.log(reversestr('level'));
});
