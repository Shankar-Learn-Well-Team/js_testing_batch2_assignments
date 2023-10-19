expect.extend({
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

        if (rev == str) {
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
