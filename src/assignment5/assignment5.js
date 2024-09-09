expect.extend({
    toBeMatchWith(received, argument) {
        const pass = received=== argument;
        if (pass) {
            return {
                message: () =>
                    `expected ${received} should match with ${argument}`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `expected ${received} should not match with ${argument}`,
                pass: false,
            };
        }
    },
});

test('String should be match with', () => {
    expect("pooja").toBeMatchWith("pooja");
});