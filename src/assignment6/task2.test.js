test('check mock function mockReturnValues', () => {
    const myMock = jest.fn();
    console.log(myMock());

    myMock
        .mockReturnValueOnce('Toyota')
        .mockReturnValueOnce('Tata')
        .mockReturnValueOnce('Honda')
        .mockReturnValue(false)
        .mockReturnValue(true);

    console.log(myMock(), myMock(), myMock());
});
