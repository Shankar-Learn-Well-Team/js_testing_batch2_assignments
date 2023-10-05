const path = require('path');
const fullPath = path.join(__dirname,'/foo', 'bar','..', 'baz/asdf', 'quux', 'example.txt');
   console.log(fullPath);