test('check mock function mockReturnValues', () => {
    const myMock = jest.fn();
    console.log(myMock());

    myMock
        .mockReturnValueOnce('Drake')
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false)
        .mockReturnValue(false);

    console.log(myMock(), myMock(), myMock(), myMock());
});
