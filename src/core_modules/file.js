const { dir } = require('console');
const fs = require('fs');

// fs.readFile('./src/core_modules/example.txt','ascii',(err,data) =>{
//     if (err) throw err;
//     console.log(data);
// });

// fs.writeFile(
//     './src/core_modules/example.txt',
//     'Hello World, Node.js!',
//     'utf8',
//     (err) =>{
//     if (err) throw err;
//     console.log('File Written Successfully');
// });


//  fs.mkdir('./src/core_modules/test', {}, (err) => {
//     if (err) throw err;     
//     console.log('Folder created...');
//  });

// const dirPath = "./src/core_modules/"
// fs.opendir(dirPath, {}, (err, dirr) => {

//     console.log(dir);
//     console.log(err);
//     if (err) throw err;
//     console.log(`Directory ${dirPath} is open....`);
//     //console.log('Directory is open....');
// });

// const directoryPath = "./src/core_modules/test"

// const customOpenDir = async () => {
//     try {

//         fs.writeFileSync(directoryPath + '/rexample.txt', "Hello World")

//         const dir = fs.opendirSync(directoryPath);

//         for await (const dirent of dir)

//             console.log(dirent.name);

//     } catch (err) {

//         console.error(err);

//     }
// }
// customOpenDir()

const path = require('path');

// const fullPath = path.join(__dirname, 'files', 'example.txt');
// console.log(fullPath);

// const fileName = path.basename('.src/core_modules/example.txt');
// console.log(fileName);

// const directoryName = path.dirname('.src/core_modules/example.txt');
// console.log(directoryName);


// const extension = path.extname('.src/core_modules/example.txt');
// console.log(extension);

// const pathObject = path.parse('.src/core_modules/example.txt');
// console.log(pathObject);

// const delimiter = path.delimiter;
// console.log(delimiter);


// const formattedPath = path.format({
//     dir: './src/core_modules/',
//     base: 'example.txt',
// });
// console.log(formattedPath);
