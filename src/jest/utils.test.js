const utils = require('./utils');

describe('Utility Functions', () => {
    test('Add 1 + 2 should equal 3', () => {
        expect(utils.add(1, 2)).toBe(3);
    });

    test('Subtract 5 - 3 should equal 2', () => {
        expect(utils.subtract(5, 3)).toBe(2);
    });

    test('isNull function should return null', () => {
        expect(utils.isNull()).toBeNull();
    });

    test('isUndefined function should return undefined', () => {
        expect(utils.isUndefined()).toBeUndefined();
    });

    test('isDefined function should return defined', () => {
        expect(utils.isDefined()).toBeDefined();
    });

    test('isTruthy function should return a truthy value', () => {
        expect(utils.isTruthy()).toBeTruthy();
    });

    test('isFalsy function should return a falsy value', () => {
        expect(utils.isFalsy()).toBeFalsy();
    });

    test('Check if 5 is greater than 3', () => {
        expect(utils.greaterThan(5, 3)).toBeGreaterThan(3);
    });

    test('Check if 3 is less than 5', () => {
        expect(utils.lessThan(3, 5)).toBeLessThan(5);
    });

    test('Concatenate "Hello" and "Jest!"', () => {
        expect(utils.concatenate('Hello', ' Jest!')).toMatch(/Hello Jest!/);
    });

    test('Check if the array contains 3', () => {
        expect(utils.getArray()).toContain(3);
    });
});
