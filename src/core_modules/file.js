const { dir } = require('console');
const fs = require('fs');
const directoryPath = "./src/core_modules/test";

// fs.readFile('./src/Core_Modules/example.txt', 'urf8',(err , data) => {
//     if (err) throw err;
//     console. log(data);
// })

// fs.readFile('./src/Core_Modules/example.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data); // Contents of the file
// });

// fs.mkdir('./src/Core_Modules/test', {}, (err) => {    
//     if (err) throw err;    
//     console.log('Directory created...');
// });

// fs.opendir('./src/Core_Modules/test', {}, (err) => {
//     if (err) throw err;    
//     console.log('Directory opened...');
// });

// fs.opendir(directoryPath,{},(err ,dir)=> {
//     console.log(dir);
//     console.log(err);
//     if (err) throw err;
//     console.log(`The Directory ${directoryPath} is open.`);
// });

// const customOpenDir = async() => 
// {
//     try
//     {
//         fs.writeFileSync(directoryPath+'/rexample.txt', "Hello World")
//         const dir = fs.opendirSync(directoryPath);
//         for await (const dirent of dir)
//         console.log(dirent.name);
//     } 
//     catch (err) 
//     {
//         console.error(err);
//     }

// }

// customOpenDir()

// const path = require('path')
// const fullPath = path.join(__dirname, 'files', 'example.txt');
// console.log(fullPath);