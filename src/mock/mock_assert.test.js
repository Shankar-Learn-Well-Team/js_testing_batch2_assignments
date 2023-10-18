const mockFn = jest.fn();

test('calling a mock function', () => {
    mockFn('Hello, Jest!');
    expect(mockFn).toHaveBeenCalledWith('Hello, Jest!');
    
});

test('asserting mock function calls', () => {
    mockFn('Hello,');
    mockFn('Jest!');

    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith('Hello,');
    expect(mockFn).toHaveBeenCalledWith('Jest!');
    expect(mockFn).toHaveBeenCalledTimes(3);
});
