
const fs = require('fs');
try {
    const data = fs.readFileSync('./src/core_modules/example.txt', 'utf8');
    console.log(data); // Contents of the file
} catch (err) {
    console.error(err);
}

fs.writeFile('./src/core_modules/example.txt', 'Hello, Node.js!', 'utf8', (err) => {
    if (err) throw err;
    console.log('File written successfully.');
},
);