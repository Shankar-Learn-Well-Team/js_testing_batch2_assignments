// assignment 6 
// Task 4 - returned_values.test.js


test('check if number is a square', () => {
    const isSquareNumber = jest.fn();
    console.log(isSquareNumber());

    isSquareNumber
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(4)
        .mockReturnValueOnce(9)
        .mockReturnValue('Zali limit sampli');

    console.log(
        isSquareNumber(),
        isSquareNumber(),
        isSquareNumber(),
        isSquareNumber(),
        isSquareNumber(),
    );
});
