const { dir } = require('console');
const fs = require('fs')
const path = require('path')
const directoryPath = "./src/core_modules/test"
// fs.readFile('./src/core_modules/example.txt', 'ascii', (err, data) => {
//   if(err) throw err;
//   console.log(data);
// })


// fs.writeFile(directoryPath + 'example.txt','Hello, Node.js!','utf8',(err) => {
//       if (err) throw err;
//        console.log('File written successfully.');
//       });

// fs.mkdir('./src/core_modules/test', {}, (err) => {     
//       if (err) throw err;     
//       console.log('Folder created...'); 
// });

// fs.opendir(directoryPath, {},(err, dir) => {     
//       console.log(dir);
//       console.log(err);
//       if (err) throw err;     
//       console.log(`The directory '${directoryPath}' is open.`);
// });

// const dirPath = "./src/core_modules/"
// fs.readdir(dirPath, (err, files) => {
//       if(err){
//             return console.error(`Unable to scan directory: ${err}`)
//       }
//       files.forEach((file) => {
//             console.log(file)
//       })
// })

// import { opendir } from 'node:fs/promises';

// const customOpenDir = async() => {

// try {
//       fs.writeFileSync(directoryPath+'/rexample.txt', "Hello World")
//   const dir = fs.opendirSync(directoryPath);
//   console.log(typeof dir);
//   for await (const dirent of dir)
//     console.log(dirent.name);
// // dir.forEach((dirent) => {
// //       console.log(dirent.name);
// // })
// } catch (err) {
//   console.error(err);
// }
// }

// customOpenDir()

// const fullPath = path.join(__dirname, 'files', 'example.txt');
// console.log(fullPath);

// const fileName = path.basename('/path/to/example.txt');
// console.log(fileName);

// const directoryName = path.dirname('/path/to/example.txt');
// console.log(directoryName);

// const extension = path.extname('/path/to/example.txt');
// console.log(extension);
