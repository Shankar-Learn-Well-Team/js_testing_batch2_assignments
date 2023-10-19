const { add, subtract } = require('./math');

describe('Math Functions', () => {
    // Test the 'add' function
    describe.skip('add', () => {
        it('should add two positive numbers correctly', () => {
            const result = add(3, 5);
            expect(result).toBe(8);
        });

        it('should add a positive and a negative number correctly', () => {
            const result = add(3, -5);
            expect(result).toBe(-2);
        });
    });

    // Test the 'subtract' function
    describe('subtract', () => {
        it('should subtract two positive numbers correctly', () => {
            const result = subtract(8, 3);
            expect(result).toBe(5);
        });

        it('should subtract a negative number from a positive number correctly', () => {
            const result = subtract(8, -3);
            expect(result).toBe(11);
        });
    });
});
