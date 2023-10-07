const url = require('url');

const myUrl = url.parse(
    'http://mywebsite.com/hello.html?id=100&status=active',
    true,
);
//console.log(myUrl);

const myUrlObject = myUrl.format(myUrl);

console.log(myUrlObject);