

const fs = require('fs');
const directoryPath = "./src/core_modules/"

 

// fs.readFile('./src/Core_Modules/example.txt', 'urf8',(err , data) => {

// if (err) throw err;

// console. log(data);

// })

 

// fs.readFile('./src/Core_Modules/example.txt', 'utf8', (err, data) => {

//                     if (err) throw err;

//                     console.log(data); // Contents of the file

//                 });

 

// fs.mkdir('./src/Core_Modules/', {}, (err) => {    

//      if (err) throw err;    

//      console.log('Folder created...');

//      });

 

    //  fs.opendir('./src/Core_Modules/', {}, (err) => {    

    //  if (err) throw err;    

    //  console.log('Directory created...');

    //  });

   

const customOpenDir = async() => {

 

try {

      fs.writeFileSync(directoryPath+'/rexample.txt', "Hello World")

  const dir = fs.opendirSync(directoryPath);

  for await (const dirent of dir)

    console.log(dirent.name);

} catch (err) {

  console.error(err);

}

}

customOpenDir()