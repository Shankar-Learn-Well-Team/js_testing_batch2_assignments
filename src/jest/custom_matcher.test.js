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
    toBeperfectNumberOf(num) {
        let sum = 0;
        for (var i = 0; i < num; i++) {
            if (num % i == 0) {
                sum = sum + i;
            }
        }
        if (sum == num) {
            return {
                message: () =>
                    `expected ${num} is a perfect number`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `expected ${num} is not a pefect number`,
                pass: false,
            };
        }
    },

});

test('should be multiple of', () => {
    expect(12).toBeMultipleOf(4);
});

test('should be Perfect Number', () => {
    expect(28).toBeperfectNumberOf();
});
