
const path = require('path');

const directoryPath = "./src/core_modules";
//it creates a path not creating any folder structure
const fullPath = path.join(__dirname, 'abcd','xyz','sqrp', 'example1.txt');
console.log("fullpath:",fullPath);
console.log("basename:",path.basename(__dirname))
console.log("dirname:",path.dirname(__dirname))
console.log("parse:",path.parse(__filename))
//console.log("delimiter",path.delimiter)
//console.log(path.resolve(__dirname/sample.txt))


