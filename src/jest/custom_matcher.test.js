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

    toBeEligible(received) {
        if (recieved > 18) {
            return {
                message: () => `expected ${received} is eligible`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected ${received} is not eligible`,
                pass: false,
            };
        }
    },

    toBePalindrome(number) {
        // var rem,
        //     final = 0;
        // while (number > 0) {
        //     rem = number % 10;
        //     number = parseInt(number / 10);
        //     final = final * 10 + rem;
        //}
var str = number.toString();

var rev = str.split('').reverse().join('');

  if (rev==str) {
      return {
          message: () => `expected ${number} is palindrome`,
          pass: true,
      };
  } else {
      return {
          message: () => `expected ${number} is not a palindrome`,
          pass: false,
      };
  }
    },
});
test('should be palindrome', () => {
    expect(181).toBePalindrome();
});


// test('should be multiple of', () => {
//     expect(12).toBeMultipleOf(4);
// });

// test('should be eligible of age', () => {
//     expect(18).toBeEligible;
// });
