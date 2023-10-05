const fs = require('fs');

// fs.readFile('./src/core_modules/example.txt','ascii',(err,data) =>{
//     if (err) throw err;
//     console.log(data);
// });

fs.writeFile(
    './src/core_modules/example.txt',
    'Hello World, Node.js!',
    'utf8',
    (err) =>{
    if (err) throw err;
    console.log('File Written Successfully');
});
