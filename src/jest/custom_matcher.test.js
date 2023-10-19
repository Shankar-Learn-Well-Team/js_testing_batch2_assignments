

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


   
    toBeReverse(str) {
        let rev="";
       for (var i = str.length - 1; i >= 0; i--) {
           rev += str[i];
       }
        if (rev === str) {
            return {
                message: () =>
                    `expected ${str} to be a reverse string `,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `expected ${str} not to be a reverse string`,
                pass: false,
            };
        }
    },
});

// test('should be multiple of', () => {
//     expect(12).toBeMultipleOf(2);
// });

test('should be a reverse string', () => {
    expect("levelll").toBeReverse()
});
