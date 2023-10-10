const express = require('express');
const jwt = require('jsonwebtoken');
const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

// Create Express Server
const app = express();

// Get Port For Server
const port = process.env.PORT || 3000;

// Connection URL
const url = process.env.DB_CONNECTION_STRING;

// Database Name
const dbName = process.env.DB_CONNECTION_NAME;

// Secret Key
const secretKey = process.env.JWT_SECRET;

app.use(express.json());

// Create a MongoClient with options
const client = new MongoClient(url, {
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Set your preferred timeout value here
});

// Connect to the MongoDB server
client
    .connect()
    .then(() => {
        console.log('Connected to MongoDB successfully');

        // Start your Express.js application or perform operations here
        startServer();
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

function startServer() {
    if (client.topology.isConnected()) {
        // Create a token for app authentication
        app.post('/createToken', (req, res) => {
            try {
                const { appId, appSecret } = req.body;

                if (appId === dbName && appSecret === secretKey) {
                    // If the app authentication is successful, create a token
                    const token = jwt.sign({ appId }, secretKey, {
                        expiresIn: '1h',
                    });

                    res.status(200).json({ token });
                } else {
                    res.status(401).json({ error: 'Invalid credentials' });
                }
            } catch (error) {
                console.error('Error creating token:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        });

        // Middleware to verify the token
        const verifyToken = (req, res, next) => {
            const token = req.header('Authorization')?.replace('Bearer ', '');

            if (!token) {
                return res
                    .status(401)
                    .json({ error: 'Unauthorized: Missing token' });
            }

            jwt.verify(token, secretKey, (err, decoded) => {
                if (err) {
                    return res
                        .status(401)
                        .json({ error: 'Unauthorized: Invalid token' });
                }
                req.appId = decoded.appId; // Store the appId in the request for later use
                next();
            });
        };

        // API to create an employee and personal details entry
        app.post('/createEmployee', async (req, res) => {
            try {
                const db = client.db(dbName);

                // Extract data from the request body
                const {
                    firstname,
                    lastname,
                    dob,
                    address,
                    contact,
                    email,
                    role,
                    joiningdate,
                    manager,
                    shift,
                    storeId,
                    isManager,
                } = req.body;

                // Insert personal details data
                const personalDetailsResult = await db
                    .collection('personalDetails')
                    .insertOne({
                        firstname,
                        lastname,
                        dob,
                        address,
                        contact,
                        email,
                    });

                // New Employee Id
                const empId = generateEmployeeId();

                // Insert employee details data
                const employeeDetailsResult = await db
                    .collection('employeeDetails')
                    .insertOne({
                        id: personalDetailsResult.insertedId,
                        employeeId: empId, // You can implement a function to generate an employee ID
                        role,
                        joiningdate,
                        manager,
                        shift,
                        storeId,
                        isManager,
                    });

                res.status(201).json({
                    message: 'Employee created successfully',
                    personalDetailsId: personalDetailsResult.insertedId,
                    employeeDetailsId: employeeDetailsResult.insertedId,
                    employeeId: empId,
                });
            } catch (error) {
                console.error('Error creating employee:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        });

        // Helper function to generate a random employee ID (customize as needed)
        function generateEmployeeId() {
            return `EMP${Math.floor(1000 + Math.random() * 9000)}`;
        }

        // Get an employee by ID
        app.get('/getEmployee/:id', async (req, res) => {
            try {
                const db = client.db(dbName);

                const id = req.params.id;

                const employee = await db
                    .collection('employeeDetails')
                    .findOne({ employeeId: id });

                if (!employee) {
                    return res
                        .status(404)
                        .json({ message: 'Employee not found' });
                }

                res.status(200).json(employee);
            } catch (error) {
                console.error('Error getting employee:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        });

        // Update an employee by ID
        app.put('/updateEmployee/:id', verifyToken, async (req, res) => {
            try {
                const db = client.db(dbName);

                const id = req.params.id;

                const {
                    role,
                    joiningdate,
                    manager,
                    shift,
                    storeId,
                    isManager,
                } = req.body;

                const result = await db.collection('employeeDetails').updateOne(
                    { employeeId: id },
                    {
                        $set: {
                            role,
                            joiningdate,
                            manager,
                            shift,
                            storeId,
                            isManager,
                        },
                    },
                );

                // Extract the fields to update from the request body
                // const updateFields = {};
                // if (req.body.role) updateFields.role = req.body.role;
                // if (req.body.joiningdate)
                //     updateFields.joiningdate = req.body.joiningdate;
                // if (req.body.manager) updateFields.manager = req.body.manager;
                // if (req.body.shift) updateFields.shift = req.body.shift;
                // if (req.body.storeId) updateFields.storeId = req.body.storeId;
                // if (req.body.isManager !== undefined)
                //     updateFields.isManager = req.body.isManager;

                // const result = await db.collection('employeeDetails').updateOne(
                //     { employeeId : id },
                //     { $set: updateFields }, // Update only the specified fields
                // );

                if (result.matchedCount === 0) {
                    return res
                        .status(404)
                        .json({ message: 'Employee not found' });
                }

                res.status(200).json({
                    message: 'Employee updated successfully',
                });
            } catch (error) {
                console.error('Error updating employee:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        });

        // Delete an employee by ID
        app.delete('/deleteEmployee/:id', async (req, res) => {
            try {
                const db = client.db(dbName);

                const id = req.params.id;

                const result = await db
                    .collection('employeeDetails')
                    .deleteOne({ employeeId: id });

                if (result.deletedCount === 0) {
                    return res
                        .status(404)
                        .json({ message: 'Employee not found' });
                }

                res.status(200).json({
                    message: 'Employee deleted successfully',
                });
            } catch (error) {
                console.error('Error deleting employee:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        });

        // Started listening to PORT
        const server = app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

        // Handle graceful shutdown
        process.on('SIGINT', () => {
            console.log('Received SIGINT. Closing server...');

            // Close the server
            server.close((err) => {
                if (err) {
                    console.error('Error closing server:', err);
                    process.exit(1); // Exit with an error code
                } else {
                    console.log('Server closed. Exiting process.');
                    process.exit(0); // Exit with success code
                }
            });
        });
    } else {
        console.error('MongoDB client is not connected');
    }
}
