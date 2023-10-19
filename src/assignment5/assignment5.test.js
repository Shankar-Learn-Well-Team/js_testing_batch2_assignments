const { name } = require('ejs');

expect.extend({
    
    toBeStr(received, argument) {
        const pass = received.split(' ').join('').length === argument.split(' ').join('').length;
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
