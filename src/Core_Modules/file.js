const fs = require('fs');


// fs.readFile('./src/Core_Modules/example.txt', 'urf8',(err , data) => {
// if (err) throw err;
// console. log(data); 
// })


fs.readFile('./src/Core_Modules/example.txt', 'utf8', (err, data) => {
                    if (err) throw err;
                    console.log(data); // Contents of the file
                });