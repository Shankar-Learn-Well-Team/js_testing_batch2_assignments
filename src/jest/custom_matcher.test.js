const { name } = require('ejs');

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

    toBeStr(received, argument) {
        const pass = received.split(" ").join("").length ===  argument.split(" ").join("").length;
        if (pass) {
            return {
                message: () =>
                    `expected ${received} Length is not equal ${argument}`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `expected ${received} Length is equal ${argument}`,
                pass: false,
            };
        }
    },
});

test('String should match', () => {
    expect('Parth sharma').toBeStr('parth sharma');
});
