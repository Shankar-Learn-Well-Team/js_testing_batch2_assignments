expect.extend({
    toBeMultipleOf(received, argument) {
        const pass = received % argument === 0;
        if (pass) {
            return {
                message: () =>
                    `expected ${received} not to be a multiple of ${argument}`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `expected ${received} to be a multiple of ${argument}`,
                pass: false,
            };
        }
    },
});

test('should be multiple of', () => {
    expect(12).toBeMultipleOf(4);
});

// function sum(a, b) {
//     return a + b;
// }

// test('adds 10 + 20 to equal 30', () => {
//     expect(sum(10, 20)).toBe(30);
// })

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

test('adds elements of array [1, 2, 3] to equal 6', () => {
    expect(sum([1, 2, 3])).toBe(6);
});

function concatenate(arr) {
    return arr.reduce((a, b) => a + b, '');
}

test('concatenates elements of array ["Hello", " ", "World"] to equal "Hello World"', () => {
    expect(concatenate(['Hello', ' ', 'World'])).toBe('Hello World');
});
