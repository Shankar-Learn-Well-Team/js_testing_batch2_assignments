test('check mock function implementations', () => {
    jest.mock('./leapYear');
    const leapYr = require('./leapYear');

    // Changing the Implementation Behaviour using Jest Mock
    leapYr
        .mockImplementationOnce((year) => year)
        .mockImplementation((year) => year+1);
    console.log('After Adding Mock Implementation');
    console.log(leapYr(2022));
    console.log(leapYr(2022));
    console.log(leapYr(2023));
});
