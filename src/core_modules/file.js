// const path = require('path');

// // const fullPath = path.join(__dirname, 'files', 'example.txt');
// console.warn('1', path.basename(__dirname));
// console.warn('2', path.dirname(__dirname));

// console.warn('3', path.parse(__dirname));
// console.warn('4', path.parse(__filename));


const fs = require('fs');
const directoryPath = './src/core_module/test';
// fs.readFile('./src/core_module/example.txt', 'ascii', (err, data) => {
//     if (err) throw err;
//     console.log(data); // Contents of the file
// });

//  fs.writeFile('./src/core_module/example.txt','Hello, Node.js!','utf8',(err) => {
//          if (err) throw err;
//          console.log('File written successfully.');
//      },
//  );

// fs.mkdir('./src/core_module/test', {}, (err) => {
//     if (err) throw err;
//     console.log('Folder created...');
// });

// import { opendir } from 'node:fs/promises';

// const customOpenDir = async () => {
//     try {
//         fs.writeFileSync(directoryPath + '/rexample.txt', 'Hello World');

//         const dir = fs.opendirSync(directoryPath);

//         for await (const dirent of dir) console.log(dirent.name);
//     } catch (err) {
//         console.error(err);
//     }
// };

// customOpenDir();

const path = require('path');

const fullPath = path.join(__dirname,'/foo','bar','..','baz/asdf','quux','example.txt',);
console.log(fullPath);
