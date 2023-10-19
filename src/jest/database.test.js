const Database = require('./database');
let db;

// Setup: Initialize the database before tests
beforeAll(() => {
    db = new Database();
    db.connect();
});

// Teardown: Clean up the database after tests
afterAll(() => {
    db.disconnect();
});

describe('Database operations', () => {
    it('should insert data into the database', () => {
        // Arrange
        const data = { id: 1, name: 'Example' };

        // Act
        db.insert(data);

        // Assert
        expect(db.getData()).toContainEqual(data);
    });
});
