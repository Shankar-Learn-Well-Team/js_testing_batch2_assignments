// Import the function to be tested
const { sayHello } = require('./assignment1.js');

// Create a test suite using describe
describe('sayHello', () => {
    // Test case 1
    it('should greet the user with "Hello, Good Morning John Doe"', () => {
        // Arrange: Set up the test scenario
        const userName = 'John Doe';
        const testUserName = 'Baki Hanma';

        // Act: Call the function being tested
        const result = sayHello(userName);

        // Assert: Check if the function produced the expected output
        const expectedString = `Hello, Good Morning ${userName}`;
        expect(result).toEqual(expectedString);
    });
});
