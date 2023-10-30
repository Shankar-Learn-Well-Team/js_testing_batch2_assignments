test('timed function', () => {
    jest.useFakeTimers(); // Enable fake timers

    const callback = jest.fn();

    setTimeout(callback, 1000);

    jest.runAllTimers(); // Run all pending timers

    expect(callback).toHaveBeenCalled();
});
