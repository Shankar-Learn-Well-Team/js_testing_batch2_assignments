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
