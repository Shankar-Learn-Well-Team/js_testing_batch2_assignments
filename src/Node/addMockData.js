const { MongoClient } = require('mongodb');

const dotenv = require('dotenv');
dotenv.config();

// Connection URL
const url = process.env.DB_CONNECTION_STRING;

// Database Name
const dbName = process.env.DB_CONNECTION_NAME;

async function addMockData() {
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

        // Define mock data for personalDetails
        const personalDetailsData = [
            {
                id: 1,
                firstname: 'John',
                lastname: 'Doe',
                dob: '1990-01-15',
                address: '123 Main St',
                contact: '123-456-7890',
                email: 'john@example.com',
            },
            // Add more personalDetails mock data here
        ];

        // Insert mock data into the "personalDetails" collection
        await db.collection('personalDetails').insertMany(personalDetailsData);
        console.log('Added mock data to "personalDetails" collection');

        // Define mock data for employeeDetails
        const employeeDetailsData = [
            {
                id: 1,
                employeeId: 'EMP001',
                role: 'Manager',
                joiningdate: '2022-03-01',
                manager: 'Manager Name',
                shift: 'Morning',
                storeId: 101,
                isManager: true,
            },
            // Add more employeeDetails mock data here
        ];

        // Insert mock data into the "employeeDetails" collection
        await db.collection('employeeDetails').insertMany(employeeDetailsData);
        console.log('Added mock data to "employeeDetails" collection');

        // Define mock data for storeDetails
        const storeDetailsData = [
            {
                storeId: 101,
                storeName: 'Store A',
                location: '123 Store St',
                shift: 'Morning',
                owner: 'Owner Name',
            },
            // Add more storeDetails mock data here
        ];

        // Insert mock data into the "storeDetails" collection
        await db.collection('storeDetails').insertMany(storeDetailsData);
        console.log('Added mock data to "storeDetails" collection');

        // Close the connection when you're done
        await client.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Error adding mock data to MongoDB:', error);
    }
}

// Call the addMockData function when the file is run
addMockData();
