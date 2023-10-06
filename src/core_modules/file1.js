const fs = require('fs');
const path = require('path');

/* fs.readFile('./src/core_modules/example1.txt', 'ascii', (err, data) => {
                     if (err) throw err;
                     console.log(data); // Contents of the file
                });


                 fs.writeFile(
                     './src/core_modules/example1.txt',
                     'Hello, Node.js!',
                     'utf8',
                     (err) => {
                         if (err) throw err;
                         console.log('File written successfully.');
                     },
                 ); */

// fs.mkdir('./src/core_modules/test', {}, (err) => {     if (err) throw err;     console.log('Folder created...'); });

// fs.opendir('./src/core_modules/test', {}, (err,dir) => {

//     if (err) throw err;

//     console.log('Folder opened...');

//     console.log(dir);

// });

// const customOpen=async()=>{
// try {
//     fs.writeFileSync('./src/core_modules/test'+'/example2.txt',"Welcome nodejs")
//   const dir = await fs.opendirSync('./src/core_modules/test');
//   for await (const dirent of dir)
//     console.log(dirent.name);
// } catch (err) {
//   console.error(err);
// } }
// customOpen()

const fullPath = path.join(__dirname, 'files', 'example1.txt');

console.log(fullPath);
