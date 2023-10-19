class Database {
    constructor() {
        this.data = [];
    }

    connect() {
        // Connect to the database (simulated operation)
        console.log('Connected to the database');
    }

    disconnect() {
        // Disconnect from the database (simulated operation)
        console.log('Disconnected from the database');
    }

    insert(data) {
        this.data.push(data);
    }

    getData() {
        return this.data;
    }
}

module.exports = Database;
