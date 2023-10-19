const path = require('path');

// const fullPath = path.join(__dirname, 'files', 'example.txt');
console.warn('1', path.basename(__dirname));
console.warn('2', path.dirname(__dirname));

console.warn('3', path.parse(__dirname));
console.warn('4', path.parse(__filename));
