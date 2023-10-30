const User = require('./user');

describe('User class', () => {
    it('should be able to log in', () => {
        // Arrange
        const user = new User('Alice');

        // Act
        user.login();

        // Assert
        expect(user.loggedIn).toBe(true);
    });

    it('should be able to log out', () => {
        // Arrange
        const user = new User('Bob');
        user.login();

        // Act
        user.logout();

        // Assert
        expect(user.loggedIn).toBe(false);
    });
});
