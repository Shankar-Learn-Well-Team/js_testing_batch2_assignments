const mockFn = jest.fn();

test('calling a mock function', () => {
    mockFn(['harry','peter','john']);
    expect(mockFn).toHaveBeenCalledWith(['harry', 'peter', 'john']);
});

test('asserting mock function calls', () => {
    mockFn('harry');
    mockFn('john');

    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith('harry');
    expect(mockFn).toHaveBeenCalledWith('john');
    expect(mockFn).toHaveBeenCalledTimes(3);
});
