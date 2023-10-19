const request = require('supertest');
const express = require('express');
const app = require('./app'); // Import your Express app
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');

jest.mock('jsonwebtoken', () => ({
    sign: jest.fn(),
    verify: jest.fn(),
}));

jest.mock('mongodb', () => ({
    MongoClient: {
        connect: jest.fn(),
    },
}));

describe('API Tests', () => {
    let server;
    let mongoServer;

    beforeAll(async () => {
        server = app.listen();
        // Start an in-memory MongoDB server
        mongoServer = new MongoMemoryServer();
        const uri = await mongoServer.getUri();

        // Mock MongoDB connection
        jest.mock('mongodb', () => ({
            MongoClient: {
                connect: jest.fn().mockResolvedValue({
                    db: jest.fn().mockReturnThis(),
                    collection: jest.fn().mockReturnThis(),
                }),
            },
        }));

        // Set the MongoDB URI in the environment
        process.env.DB_CONNECTION_STRING = uri;
    });

    afterAll(async (done) => {
        server.close(() => {
            // Stop the in-memory MongoDB server
            mongoServer.stop();
            done();
        });
    });

    describe('POST /createToken', () => {
        it('should create a token for app authentication', async () => {
            const mockToken = 'mocked-token';
            jwt.sign.mockReturnValue(mockToken);

            const response = await request(app)
                .post('/createToken')
                .send({ appId: 'mocked-appId', appSecret: 'mocked-secret' });

            expect(response.status).toBe(200);
            expect(response.body.token).toBe(mockToken);
        });

        it('should handle invalid credentials', async () => {
            const response = await request(app)
                .post('/createToken')
                .send({ appId: 'invalid-appId', appSecret: 'invalid-secret' });

            expect(response.status).toBe(401);
            expect(response.body.error).toBe('Invalid credentials');
        });

        it('should handle server error', async () => {
            jwt.sign.mockImplementation(() => {
                throw new Error('Mocked error');
            });

            const response = await request(app)
                .post('/createToken')
                .send({ appId: 'mocked-appId', appSecret: 'mocked-secret' });

            expect(response.status).toBe(500);
            expect(response.body.error).toBe('Internal server error');
        });
    });

    describe('POST /createEmployee', () => {
        it('should create an employee and personal details entry', async () => {
            // Mock MongoDB result
            const mockPersonalDetailsId = 'mocked-personal-details-id';
            const mockEmployeeDetailsId = 'mocked-employee-details-id';
            const mockEmployeeId = 'EMP123';
            const mockEmployeeData = {
                firstname: 'John',
                lastname: 'Doe',
                dob: '1990-01-01',
                // Add other employee data
            };

            // Mock MongoDB client
            const mockDbResult = {
                collection: jest.fn().mockReturnThis(),
                insertOne: jest
                    .fn()
                    .mockResolvedValueOnce({
                        insertedId: mockPersonalDetailsId,
                    })
                    .mockResolvedValueOnce({
                        insertedId: mockEmployeeDetailsId,
                    }),
            };

            MongoClient.connect.mockResolvedValue({
                db: jest.fn().mockReturnThis(),
                collection: jest.fn().mockReturnThis(),
            });
            MongoClient.connect()
                .db()
                .collection()
                .insertOne.mockImplementation((data) => {
                    if (data.firstname === mockEmployeeData.firstname) {
                        return { insertedId: mockPersonalDetailsId };
                    } else {
                        return { insertedId: mockEmployeeDetailsId };
                    }
                });

            const response = await request(app)
                .post('/createEmployee')
                .send(mockEmployeeData);

            expect(response.status).toBe(201);
            expect(response.body.personalDetailsId).toBe(mockPersonalDetailsId);
            expect(response.body.employeeDetailsId).toBe(mockEmployeeDetailsId);
            expect(response.body.employeeId).toBe(mockEmployeeId);
        });

        it('should handle internal server error', async () => {
            // Mock MongoDB client to throw an error
            MongoClient.connect.mockRejectedValue(
                new Error('Mocked MongoDB error'),
            );

            const response = await request(app).post('/createEmployee');

            expect(response.status).toBe(500);
            expect(response.body.error).toBe('Internal server error');
        });
    });

    describe('GET /getEmployee/:id', () => {
        it('should get an employee by ID', async () => {
            // Mock MongoDB result
            const mockEmployee = {
                employeeId: 'EMP123',
                firstname: 'John',
                lastname: 'Doe',
                // Add other employee data
            };
            const mockDbResult = {
                collection: jest.fn().mockReturnThis(),
                findOne: jest.fn().mockResolvedValue(mockEmployee),
            };

            // Mock MongoDB client
            MongoClient.connect.mockResolvedValue({
                db: jest.fn().mockReturnThis(),
                collection: jest.fn().mockReturnThis(),
            });
            MongoClient.connect()
                .db()
                .collection()
                .findOne.mockResolvedValue(mockEmployee);

            const response = await request(app).get('/getEmployee/EMP123');

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockEmployee);
        });

        it('should handle employee not found', async () => {
            // Mock MongoDB result for employee not found
            MongoClient.connect.mockResolvedValue({
                db: jest.fn().mockReturnThis(),
                collection: jest.fn().mockReturnThis(),
            });
            MongoClient.connect()
                .db()
                .collection()
                .findOne.mockResolvedValue(null);

            const response = await request(app).get('/getEmployee/EMP123');

            expect(response.status).toBe(404);
            expect(response.body.message).toBe('Employee not found');
        });

        it('should handle internal server error', async () => {
            // Mock MongoDB client to throw an error
            MongoClient.connect.mockRejectedValue(
                new Error('Mocked MongoDB error'),
            );

            const response = await request(app).get('/getEmployee/EMP123');

            expect(response.status).toBe(500);
            expect(response.body.error).toBe('Internal server error');
        });
    });

    describe('PUT /updateEmployee/:id', () => {
        it('should update an employee by ID', async () => {
            // Mock MongoDB result
            const mockEmployeeId = 'EMP123';

            // Mock MongoDB client
            const mockDbResult = {
                collection: jest.fn().mockReturnThis(),
                updateOne: jest.fn().mockResolvedValue({ matchedCount: 1 }),
            };

            MongoClient.connect.mockResolvedValue({
                db: jest.fn().mockReturnThis(),
                collection: jest.fn().mockReturnThis(),
            });
            MongoClient.connect()
                .db()
                .collection()
                .updateOne.mockResolvedValue({ matchedCount: 1 });

            const response = await request(app)
                .put('/updateEmployee/EMP123')
                .send({
                    role: 'Manager',
                    joiningdate: '2023-01-01',
                    // Add other fields to update
                });

            expect(response.status).toBe(200);
            expect(response.body.message).toBe('Employee updated successfully');
        });

        it('should handle employee not found', async () => {
            // Mock MongoDB result for employee not found
            const mockDbResult = {
                collection: jest.fn().mockReturnThis(),
                updateOne: jest.fn().mockResolvedValue({ matchedCount: 0 }),
            };

            MongoClient.connect.mockResolvedValue({
                db: jest.fn().mockReturnThis(),
                collection: jest.fn().mockReturnThis(),
            });
            MongoClient.connect()
                .db()
                .collection()
                .updateOne.mockResolvedValue({
                    matchedCount: 0,
                });

            const response = await request(app)
                .put('/updateEmployee/EMP123')
                .send({
                    role: 'Manager',
                    joiningdate: '2023-01-01',
                    // Add other fields to update
                });

            expect(response.status).toBe(404);
            expect(response.body.message).toBe('Employee not found');
        });

        it('should handle internal server error', async () => {
            // Mock MongoDB client to throw an error
            MongoClient.connect.mockRejectedValue(
                new Error('Mocked MongoDB error'),
            );

            const response = await request(app).put('/updateEmployee/EMP123');

            expect(response.status).toBe(500);
            expect(response.body.error).toBe('Internal server error');
        });
    });

    describe('DELETE /deleteEmployee/:id', () => {
        it('should delete an employee by ID', async () => {
            // Mock MongoDB result
            const mockEmployeeId = 'EMP123';

            // Mock MongoDB client
            const mockDbResult = {
                collection: jest.fn().mockReturnThis(),
                deleteOne: jest.fn().mockResolvedValue({ deletedCount: 1 }),
            };

            MongoClient.connect.mockResolvedValue({
                db: jest.fn().mockReturnThis(),
                collection: jest.fn().mockReturnThis(),
            });
            MongoClient.connect()
                .db()
                .collection()
                .deleteOne.mockResolvedValue({
                    deletedCount: 1,
                });

            const response = await request(app).delete(
                '/deleteEmployee/EMP123',
            );

            expect(response.status).toBe(200);
            expect(response.body.message).toBe('Employee deleted successfully');
        });

        it('should handle employee not found', async () => {
            // Mock MongoDB result for employee not found
            const mockDbResult = {
                collection: jest.fn().mockReturnThis(),
                deleteOne: jest.fn().mockResolvedValue({ deletedCount: 0 }),
            };

            MongoClient.connect.mockResolvedValue({
                db: jest.fn().mockReturnThis(),
                collection: jest.fn().mockReturnThis(),
            });
            MongoClient.connect()
                .db()
                .collection()
                .deleteOne.mockResolvedValue({
                    deletedCount: 0,
                });

            const response = await request(app).delete(
                '/deleteEmployee/EMP123',
            );

            expect(response.status).toBe(404);
            expect(response.body.message).toBe('Employee not found');
        });

        it('should handle internal server error', async () => {
            // Mock MongoDB client to throw an error
            MongoClient.connect.mockRejectedValue(
                new Error('Mocked MongoDB error'),
            );

            const response = await request(app).delete(
                '/deleteEmployee/EMP123',
            );

            expect(response.status).toBe(500);
            expect(response.body.error).toBe('Internal server error');
        });
    });
});
