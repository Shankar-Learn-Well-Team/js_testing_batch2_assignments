const fs = require('fs');

// fs.readFile('./src/core_modules/example.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// fs.writeFile(
//     './src/core_modules/example.txt',
//     'Hello, Node.js!!',
//     'utf8',
//     (err) => {
//         if (err) throw err;
//         console.log('File written successfully.');
//     },
// );

// fs.mkdir('./src/core_modules/test', {}, (err) => {
//      if (err) throw err;
//      console.log('Folder created...');
//     });

// fs.opendir('./src/core_modules/test', {}, (err,dir) => {
//     if (err) throw err;
//     console.log('Folder opened...');
//     console.log(dir);
// });

// const directoryPath = "./src/core_modules/test"

// const customOpenDir = async() => {
// try {
//      fs.writeFileSync(directoryPath+'/rexample.txt', "Hello World")
//       const dir = fs.opendirSync(directoryPath);
//       for await (const dirent of dir)
//      console.log(dirent.name);
//      } catch (err) {
//           console.error(err);
// }
// }

// customOpenDir()

const path = require('path');

const fullPath1 = path.join(__dirname, 'files', 'example.txt');
console.log(fullPath1);

const fullPath = path.join(
    __dirname,
    '/foo',
    'bar',
    '..',
    'baz/asdf',
    'quux',
    'example.txt',
);
console.log(fullPath);

// const fullPath = path.join(__dirname, 'files', 'example.txt');
// console.warn('1', path.basename(__dirname));
// console.warn('2', path.dirname(__dirname));

// console.warn('3', path.parse(__dirname));
// console.warn('4', path.parse(__filename));
