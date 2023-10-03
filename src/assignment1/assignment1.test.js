// Import the function to be tested
import { sayHello } from './src/assignment1/assignment1.js';

// Create a test suite using describe
describe('sayHello', () => {
    // Test case 1
    it('should greet the user with "Hello, Good Morning John Doe"', () => {
        // Arrange: Set up the test scenario
        const userName = 'Baki Hanma';

        // Act: Call the function being tested
        const result = sayHello(userName);

        // Assert: Check if the function produced the expected output
        expect(result).toEqual('Hello, Good Morning John Doe');
    });
});
