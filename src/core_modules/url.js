const url = require('url');
const myUrl = url.parse(
    'http://mywebsite.com/hello.html?id=100&status=active',
    true,
);
console.log(myUrl)

const urlString = url.format(myUrl);
console.log(urlString);

const myUrl2 = new URL(
    'http://mywebsite.com/hello.html?id=100&status=active',
);
console.log(myUrl2);