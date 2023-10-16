module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    isNull: () => null,
    isUndefined: () => undefined,
    isDefined: () => true,
    isTruthy: () => 'Hello, Jest!',
    isFalsy: () => false,
    greaterThan: (a, b) => a > b,
    lessThan: (a, b) => a < b,
    concatenate: (a, b) => a + b,
    getArray: () => [1, 2, 3, 4, 5],
};
