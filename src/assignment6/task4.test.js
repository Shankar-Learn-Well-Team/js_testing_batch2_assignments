const mockFn = jest.fn();

test('calling a mock function', () => {
    mockFn('Apple, Banana!');
    expect(mockFn).toHaveBeenCalledWith('Apple, Banana!');
});

test('asserting mock function calls', () => {
    mockFn('Apple,');
    mockFn('Banana!');

    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith('Apple,');
    expect(mockFn).toHaveBeenCalledWith('Banana!');
    expect(mockFn).toHaveBeenCalledTimes(3);
});

