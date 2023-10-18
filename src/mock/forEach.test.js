const forEach = require('./forEach');

const mockCallback = jest.fn((x) => 42 + x);

// Calls
// [
//     ['arg1', 'arg2'], // f1
//     ['arg3', 'arg4'], // f2
// ];

// Results
// [
//     {
//         type: 'return',
//         value: 'result1',
//     },
//     {
//         type: 'throw',
//         value: {
//             /* Error instance */
//         },
//     },
//     {
//         type: 'return',
//         value: 'result2',
//     },
// ];

test('forEach mock function', () => {
    forEach([0, 1], mockCallback);

    // The mock function was called twice
    expect(mockCallback.mock.calls).toHaveLength(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);

    // The return value of the second call to the function was 42
    expect(mockCallback.mock.results[1].value).toBe(43);
});

// Calls
// [
//     // Call 1 Arguments Array
//     [0],
//     // Call 2 Arguments Array
//     [1],
// ];

// Results
// [
//     // Call 1 Result Object
//     {
//         type: 'return',
//         value: '1',
//     },
//     // Call 2 Result Object
//     {
//         type: 'return',
//         value: '2',
//     },
// ];
