
 const fs = require('fs');
const path = require('path');


// try {
//     const data = fs.readFileSync('./src/core_modules/example.txt', 'utf8');
//     console.log(data); // Contents of the file
// } catch (err) {
//     console.error(err);
// }

// fs.writeFile('./src/core_modules/example.txt', 'Hello, Node.js!', 'utf8', (err) => {
//     if (err) throw err;
//     console.log('File written successfully.');
// },
// );


// fs.mkdir('./src/core_modules/test', {}, (err) => 
// {     if (err) throw err;     
//     console.log('Folder created...'); 
// });

// fs.opendir('./src/core_modules/test', {}, (err,dir) => {
//     if (err) throw err;
//     console.log('Folder opened...');
//     console.log(dir);
    
// });

// fs.opendirSync('./src/core_modules/test', {}, (err, dir) => {
//     if (err) throw err;
//     console.log('Folder opened...');
//     console.log(dir);

// });

//import { opendir } from 'node:fs/promises';
const directoryPath = path.join(__dirname, 'example1.txt');
//const directoryPath ="./src/core_modules";
async function abcd(){
try {
    fs.writeFileSync(directoryPath+'/example2.txt', 'Hello, Pooja!')
    const dir = fs.opendirSync(directoryPath);
    for await (const dirent1 of dir)
        console.log(dirent1.name);
} catch (err) {
    console.error(err);
} 
}
abcd();