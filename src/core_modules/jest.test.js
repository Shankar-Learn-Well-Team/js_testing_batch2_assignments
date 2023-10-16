test('Truthy Test', () => {
    expect(5 > 3).toBe(true);
});

test('Loose Equality Test', () => {
    expect(2 == '2').toBe(true);
});

test('Strict Equality Test', () => {
    expect(2 === '2').toBe(false);
});

test('Deep Equality Test', () => {
    const object1 = { a: 1, b: 2 };
    const object2 = { a: 1, b: 3 };
    expect(object1).toEqual(object2);
});

test('Throws Test', () => {
    const throwFn = () => {
        throw new Error('Test error');
    };
    expect(throwFn).toThrow(Error);
});

test('Array Length Test', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(numbers.length).toBe(5);
});

test('Object Properties Test', () => {
    const person = { name: 'John', age: 30 };
    expect(person).toEqual({ name: 'John', age: 30 });
});

test('Custom Function Test', () => {
    function multiply(a, b) {
        return a * b;
    }
    expect(multiply(4, 5)).toBe(20); // The expected value should be 20, not 21
});
