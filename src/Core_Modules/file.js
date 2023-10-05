const { dir } = require('console');
const fs = require('fs');


// fs.readFile('./src/Core_Modules/example.txt', 'urf8',(err , data) => {
// if (err) throw err;
// console. log(data); 
// })


// fs.readFile('./src/Core_Modules/example.txt', 'utf8', (err, data) => {
//                     if (err) throw err;
//                     console.log(data); // Contents of the file
//                 });


// fs.mkdir('./src/Core_Modules/test', {}, (err) => {    
//      if (err) throw err;    
//      console.log('Folder created...');
//      });

    //  fs.opendir('./src/Core_Modules/test', {}, (err) => {    
    //  if (err) throw err;    
    //  console.log('Directory created...');
    //  });
    
    //  fs.opendir(directorypath,{},(err ,dir)=> {
    //     console.log(dir);
    //     console.log(err);
    //     if (err) throw err; 
    //     console.log('The Directoray ${directorypath}' is open.');
    //  });


//      const custompenDir = async() =>{
// try{
//    const dir = await fs.opendirSync (directoryPath);
//    for await (const dirent of dir) console. log(dirent. name);
//    console.log(dirent.name)
// }
// catch (err) {
// console. error (err);
// }}

// customOpenDir ()

// const directoryPath = "./src/core_modules/test"
// const customOpenDir = async() => {
// try {
//       fs.writeFileSync(directoryPath+'/rexample.txt', "Hello World")
//   const dir = fs.opendirSync(directoryPath);
//   for await (const dirent of dir)
//     console.log(dirent.name);
// } catch (err) {
//   console.error(err);
// }
// }
// customOpenDir()

const path = require('path')
const fullPath = path.join(__dirname, 'files', 'example.txt');
                console.log(fullPath);