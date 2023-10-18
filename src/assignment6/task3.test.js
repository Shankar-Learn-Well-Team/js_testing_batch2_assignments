test('check mock function mockReturnValues', () => {
    const myMock = jest.fn();
    console.log(myMock());

    myMock
        .mockReturnValueOnce('Apple')
        .mockReturnValueOnce('Banana')
        .mockReturnValueOnce('Mango')
        .mockReturnValue(false)
        .mockReturnValue(true);

    console.log(myMock(), myMock(), myMock());

});
