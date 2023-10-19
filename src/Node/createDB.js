const { MongoClient } = require('mongodb');

const dotenv = require('dotenv');
dotenv.config();

// Connection URL
const url = process.env.DB_CONNECTION_STRING;

// Database Name
const dbName = process.env.DB_CONNECTION_NAME;

async function createDB() {
    // Create a MongoClient with options
    const client = new MongoClient(url, {
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000, // Set your preferred timeout value here
    });

    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB successfully');

        const db = client.db(dbName);

        // Create "personalDetails" collection
        await db.createCollection('personalDetails');
        console.log('Created "personalDetails" collection');

        // Create "employeeDetails" collection
        await db.createCollection('employeeDetails');
        console.log('Created "employeeDetails" collection');

        // Create "storeDetails" collection
        await db.createCollection('storeDetails');
        console.log('Created "storeDetails" collection');

        // Close the connection when you're done
        await client.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the createDB function when the file is run
createDB();
