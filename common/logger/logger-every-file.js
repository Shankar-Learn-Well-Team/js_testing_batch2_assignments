const fs = require('fs');
const path = require('path');

// Define the folder path
const folderPath = '../../samples'; // Update this with the folder path

// Line to be added at the top of each file
const lineToAdd =
    "require('../common/logger/logger/logger-override'); // Import the override file\n";

// Function to add the line to a file
function addLineToFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        // Check if the line already exists in the file
        if (!data.startsWith(lineToAdd)) {
            // Add the line at the beginning of the file
            const updatedData = lineToAdd + data;

            // Write the updated contents back to the file
            fs.writeFile(filePath, updatedData, (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                } else {
                    console.log(`Added line to ${filePath}`);
                }
            });
        } else {
            console.log(`Line already exists in ${filePath}`);
        }
    });
}

// Read all files in the folder
fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('Error reading folder:', err);
        return;
    }

    // Process each file
    files.forEach((file) => {
        const filePath = path.join(folderPath, file);

        // Check if the file is a JavaScript file (ends with .js)
        if (path.extname(filePath) === '.js') {
            // Add the line to the file
            addLineToFile(filePath);
        }
    });
});
