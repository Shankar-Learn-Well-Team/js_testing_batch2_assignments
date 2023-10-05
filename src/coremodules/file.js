const fs = require('fs');

//  fs.readFile('./src/coremodules/example.txt','utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);

//  })

// fs.writeFile(
//     'example.txt',
//     'Hello, Node.js ghvhgfhgcg!',
//     'utf8',
//     (err) => {
//         if (err) throw err;
//         console.log('File written successfully.');
//     },
// );


// fs.mkdir('./src/coremodules/test', {}, (err) => {     if (err) throw err;     console.log('Folder created...'); });


// fs.readFile('./src/coremodules/test','utf-8', (err, data) => {

//                      if (err) throw err;

//                      console.log(data); // Contents of the file

//                 });



// fs.opendir('./src/coremodules/',{},(err,dirr)=>{

   

//     if(err) throw err;

//     console.log('Directory opened...')

// });



const directoryPath = "./src/coremodules/test"

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