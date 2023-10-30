const Counter = require('./counter');

let counter;

// This runs before any test case
beforeAll(() => {
    counter = new Counter();
    console.log('Before All: Initialize Counter');
});

// This runs after all test cases
afterAll(() => {
    console.log('After All: Clean Up Counter');
});

describe('Counter', () => {
    // This runs before each test case in this describe block
    beforeEach(() => {
        counter.value = 0;
        console.log('Before Each: Reset Counter');
    });

    // This runs after each test case in this describe block
    afterEach(() => {
        console.log('After Each: Clean Up After Test');
    });

    it('should increment the value', () => {
        counter.increment();
        expect(counter.value).toBe(1);
    });

    it('should decrement the value', () => {
        counter.decrement();
        expect(counter.value).toBe(-1);
    });

    it('should handle negative values correctly', () => {
        counter.decrement();
        counter.decrement();
        expect(counter.value).toBe(-2);
    });
});
