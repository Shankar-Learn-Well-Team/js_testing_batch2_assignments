const mockFn = jest.fn();

test('calling a mock function', () => {
    mockFn('Hello Mocks');
    expect(mockFn).toHaveBeenCalledWith('Hello Mocks');
    
});

test('asserting mock function calls', () => {
    mockFn('Hello');
    mockFn('Mocks');

    expect(mockFn).toHaveBeenCalled();

    expect(mockFn).toHaveBeenCalledWith('Hello');
    expect(mockFn).toHaveBeenCalledWith('Mocks');
    expect(mockFn).toHaveBeenCalledTimes(3);
});
