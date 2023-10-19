expect.extend({
    toBeFirstLetterCapitalOfWord(str) {
        if (str[0].toUpperCase() + str.slice(1) == str) {
            return {
                message: () =>
                    `expected first letter of word is capital of ${str} `,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `expected first letter of word is not capital of ${str}`,
                pass: false,
            };
        }
    },
});
test('first letter of word should be capital', () => {
    expect('Javascript').toBeFirstLetterCapitalOfWord();
});
