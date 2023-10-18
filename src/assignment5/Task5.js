function isReverse(source, target) {
    let str = "";
    for (let i = source.length - 1; i >= 0; i--) {
        str += source[i];
    }
    return str === target;
}
expect.extend({
    toBeReverseOf(received, aurgument) {
        const pass = isReverse(received, aurgument);
        console.log(pass);
        if (pass) {
            return {
                message: () =>
                    `pass zala`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `fail zala`,
                pass: false,
            };
        }
    }});
test('string should get reversed', () => {
    expect("APPLE").toBeReverseOf("ELPPA");
});