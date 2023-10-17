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
    toBeEvenno(received, argument) {
        const pass = received % argument == 0;
        if (pass) {
            return {
                message: () =>
                    `expected ${received} is Even no as it is divisible by ${argument}`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `expected ${received} is not even no as it is not divisible by ${argument}`,
                pass: false,
            };
        }
    },

    toBeFirstLetterCapitalOfWord(str) {

        if (str[0].toUpperCase() + str.slice(1) == str) {
            return {
                message: () => `expected first letter of word is capital of ${str} `,
                pass: true,
            };
        } else {
            return {
                message: () => `expected first letter of word is not capital of ${str}`,
                pass: false,
            };
        }
    },
});
test('first letter of word should be capital', () => {
    expect('Javascript').toBeFirstLetterCapitalOfWord();
});
test('should be multiple of', () => {
    expect(12).toBeMultipleOf(4);
});

test('Even no', () => {
    expect(10).toBeEvenno(2);
});
