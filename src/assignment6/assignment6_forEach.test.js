const isNegative = require('./assignment6_forEach');

// Mock function
jest.mock('./assignment6_forEach');

describe('isNegative', () => {
    it('should return true for negative numbers and false for non-negative', () => {
        const testCases = [
            { input: -17, output: true },
            { input: 0, output: false },
            { input: 17, output: false },
        
    ];
       //mockReturn
        testCases.forEach((testCase) => {
            isNegative.mockReturnValue(testCase.output);
            expect(isNegative(testCase.input)).toBe(testCase.output);
            expect(isNegative).toHaveBeenCalledWith(testCase.input);
        });
        
});
});